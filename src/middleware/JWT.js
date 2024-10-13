const jwt = require("jsonwebtoken");
const env = require("dotenv");
const JWTService = require("../services/JWT.service"); // Remove .js extension for CommonJS

env.config();
const nonSecurePaths = [
  "/login",
  "/logout",
  // "/test",
  "/register",
  "/jb"
  // "/reset-password",
  // "/news/getnewsbysort",
  // "/payment/callback",
  // "/forgotPassword",
];
const createToken = (data) => {
  try {
    const token = jwt.sign(data, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || '1h', // Fallback to 1 hour if not set
    });

    // Log token creation success if needed (ensure this is secure in production)
    console.debug("Token created successfully");

    return token;
  } catch (error) {
    // Handle specific JWT errors if necessary
    console.error("Error creating token:", error.message);
    throw new Error("Unable to create token"); // Optionally rethrow or handle the error
  }
};
const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return { expired: true, message: "Token has expired" };
    }
    return { invalid: true, message: "Token is invalid" };
  }
};
function extractToken(req) {
  if (req) {
    return req.split(" ")[1];
  } else {
    return null;
  }
}
const checkUserJWT = (req, res, next) => {
  if (nonSecurePaths.includes(req.path)) {
    return next();
  }

  const token =
    req.cookies.token ||
    req.headers["x-access-token"] ||
    extractToken(req.headers["authorization"]) ||
    req.headers["token"] ||
    req.query.token ||
    req.body.token ||
    req.params.token;
    console.log(token)

  if (!token) {
    console.log("No token provided!", req.path);
    return res.status(200).json({
      message: "No token provided!",
      code: 1,
      data: { isAuth: false },
    });
  }

  const decoded = verifyToken(token);
  if (decoded.expired) {
    return res.status(401).json({
      message: "Token has expired!",
      code: 2,
      data: { isAuth: false },
    });
  }

  if (decoded.invalid) {
    return res.status(401).json({
      message: "Unauthorized!",
      code: 1,
      data: { isAuth: false },
    });
  }

  req.user = decoded;
  req.token = token;
  next();

  // jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
  //   if (err) {
  //     return res
  //       .status(401)
  //       .send({ message: "Unauthorized!", code: 1, data: [] });
  //   }
  //   req.user = decoded;
  //   console.log("decoded", decoded);
  //   next();
  // });
};
const checkUserPermission = async (req, res, next) => {
  if (nonSecurePaths.includes(req.path) || req.path == "/account") {
    return next();
  }
  if (req.user) {
    let group_id = req.user.group_id;
    console.log("user",req.user)
    console.log("path",req.path)


    let currentUrl = req.path;
    let roles = await JWTService.getRolesByGroupId(group_id);
    console.log(roles)
    

    if (roles.data.length > 0) {
      let checkPermission = roles.data.some((item) => {
        console.log("item",item.URL)
        return Array.isArray(item.URL) ? item.URL.includes(currentUrl) : item.URL === currentUrl;
      });
      console.log("dhsadh",checkPermission)
      if (checkPermission === true) {
        next();
      } else {
        return res
          .status(401)
          .send({ message: "you don't have permission", code: 1, data: [] });
      }
    } else {
      return res
        .status(401)
        .send({ message: "you don't have permission", code: 1, data: [] });
    }
  } else {
    return res
      .status(401)
      .send({ message: "Unauthorizede!", code: 1, data: [] });
  }
};
// const checkUserPermission = async (req, res, next) => {
//   // Nếu đường dẫn không yêu cầu bảo mật hoặc là trang tài khoản
//   if (nonSecurePaths.includes(req.path) || req.path == "/account") {
//     return next();
//   }

//   // Kiểm tra người dùng có tồn tại
//   if (req.user) {
//     let group_id = req.user.group_id;
//     let currentUrl = req.path;
    
//     // Lấy danh sách quyền của người dùng dựa trên group_id
//     let roles = await JWTService.getRolesByGroupId(group_id);
//     console.log(roles);

//     // Nếu có dữ liệu quyền
//     if (roles.data.length > 0) {
//       // Giả sử roles.data chứa quyền với các đường dẫn trong một mảng `paths`
//       let checkPermission = roles.data.filter((role) => {
//         console.log("role", role.URL);
//         // Kiểm tra xem `currentUrl` có nằm trong mảng `paths` hay không
//         return role.URL.includes(currentUrl);
//       });

//       console.log("checkPermission", checkPermission);

//       // Nếu có quyền phù hợp
//       if (checkPermission.length > 0) {
//         next();
//       } else {
//         // Trả về lỗi nếu không có quyền
//         return res
//           .status(401)
//           .send({ message: "you don't have permission", code: 1, data: [] });
//       }
//     } else {
//       // Nếu không có quyền trong hệ thống
//       return res
//         .status(401)
//         .send({ message: "you don't have permission", code: 1, data: [] });
//     }
//   } else {
//     // Trả về lỗi nếu không có thông tin người dùng
//     return res
//       .status(401)
//       .send({ message: "Unauthorized!", code: 1, data: [] });
//   }
// };

module.exports ={
  createToken,
  verifyToken,
  checkUserJWT,
  checkUserPermission
};