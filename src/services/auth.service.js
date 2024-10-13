const db = require("../models/index");  // Remove .js for CommonJS
const bcrypt = require("bcryptjs");
const generator = require("generate-password");
// const sendEmail = require("./email.service"); // Uncomment if used
const JWTmdw = require("../middleware/JWT");  // Remove .js for CommonJS


const salt = bcrypt.genSaltSync(10);

const hashPassword = (password) => {
  let hashPassword = bcrypt.hashSync(password, salt);
  return hashPassword;
};

const register = async (data) => {
  try {
    const user = await db.Users.bulkCreate(
      data.map((item) => ({ ...item, password: hashPassword(item.password) }))
    );
    if (user) {
      return { status: 200, message: "register success", code: 0, data: {} };
    }
  } catch (error) {
    return { status: 500, message: "Server Error", code: -1, data: {} };
  }
};

const checkPassword = (plainPassword, hashedPassword) => {
  return bcrypt.compareSync(plainPassword, hashedPassword);
};

// Function to handle user login
const login = async (data) => {
  try {
    // Fetch the user from the database based on username and include their associated role (Group)
    const user = await db.Users.findOne({
      where: {
        username: data.username,
      },
      include: [
        {
          model: db.Roles, // Assuming Roles is the table for user roles
          as: "Group",     // Ensure that 'as' matches the alias defined in your model associations
        },
      ],
      raw: true,
      nest: true, // Flatten the result so we can access 'Group.name' directly
    });

    // Log the user data for debugging
    console.log("User data:" ,user.password);
    console.log("data",data.password)

    // Check if user exists and password is correct
    if (user) {
      const hashedPassword = bcrypt.hashSync(user.password, 10);
      if (checkPassword(data.password, hashedPassword)) {
        console.log("Password matched");
        // Construct the payload for the JWT token
        const payload = {
          email: user.email,
          username: user.username,
          group_id: user.group_id,
          role: user.Group.name, // Access the role name from the 'Group' association
          id: user.id,
          name: user.username,
        };

        // Log the payload for debugging
        

        // Create the JWT token with the payload
        const token = await JWTmdw.createToken(payload);
        console.log(token)

        // Return the success response with the token and user data
        return {
          status: 200,
          message: "Login success",
          code: 0,
          data: {
            email: user.email,
            username: user.username,
            id: user.id,
            access_token: token,
            group_id: user.group_id,
            role: user.Group.name,
            name: user.username,
          },
        };
      }
    }

    // If username or password is incorrect, return an error
    return {
      status: 400,
      message: "Username or Password is wrong",
      code: 3,
      data: {},
    };
  } catch (error) {
    // If there's a server error, log the error and return a server error response
    console.error("Server Error:", error);
    return { status: 500, message: "Server Error", code: -1, data: {} };
  }
};
// const changePassword = async (data) => {
//   try {
//     const check = await db.Users.findOne({
//       where: {
//         username: data.username,
//       },
//       raw: true,
//       nest: true,
//     });
//     if (!check) {
//       return {
//         status: 200,
//         message: "Username is not exist",
//         code: 3,
//         data: {},
//       };
//     }
//     if (!checkPassword(data.oldPassword, check.password)) {
//       return {
//         status: 200,
//         message: "Old password is wrong",
//         code: 3,
//         data: {},
//       };
//     }
//     const user = await db.Users.update(
//       {
//         password: hashPassword(data.password),
//       },
//       {
//         where: {
//           username: data.username,
//         },
//       }
//     );
//     if (user) {
//       return {
//         status: 200,
//         message: "change password success",
//         code: 0,
//         data: {},
//       };
//     }
//   } catch (error) {
//     return { status: 500, message: error.message, code: -1, data: {} };
//   }
// };
// const forgotPassword = async (data) => {
//   try {
//     const result = await db.sequelize.transaction(async (t) => {
//       console.log(data);

//       const user = await db.Users.findOne({
//         where: {
//           email: data.email,
//         },
//         raw: true,
//         nest: true,
//         transaction: t,
//       });

//       if (!user) {
//         return {
//           status: 200,
//           message: "Email không tồn tại trong hệ thống",
//           code: 3,
//           data: {},
//         };
//       }

//       const passcode = generator.generate({
//         length: 10,
//         numbers: true,
//       });

//       const hashedPassword = hashPassword(passcode);

//       const [updateCount] = await db.Users.update(
//         {
//           password: hashedPassword,
//         },
//         {
//           where: {
//             email: data.email,
//           },
//           transaction: t,
//         }
//       );

//       if (updateCount === 0) {
//         throw new Error("Failed to update password");
//       }

//       const subject = "Cấp lại mật khẩu";
//       const text = `Mật khẩu mới là: ${passcode}`;
//       const emailSent = await sendEmail(data.email, subject, text);

//       if (!emailSent) {
//         throw new Error("Failed to send email");
//       }

//       return {
//         status: 200,
//         message: "Cấp lại mât khẩu thành công, vui lòng kiểm tra email",
//         code: 0,
//         data: {},
//       };
//     });

//     return result;
//   } catch (error) {
//     console.error(error);
//     return { status: 500, message: error.message, code: -1, data: {} };
//   }
// };
module.exports = { register, login };