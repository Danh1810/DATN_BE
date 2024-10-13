
const db =require("../models/index")
const {Op} = require('sequelize')

const getAllJobpost  = async () => {
    
      // Fetch the user from the database based on username and include their associated role (Group)
      const jbp = await db.JobPosts.findAll({
      
        include: [
          {
            model: db.Employers, // Assuming Roles is the table for user roles
            as: "employer",     // Ensure that 'as' matches the alias defined in your model associations
          },
          {
            model: db.Skills, // Assuming Roles is the table for user roles
            as :'skill', 
            through : { attributes: [] }, // Không hiển thị bảng trung gian
            attributes: ['id','name'] // Lấy tên các kỹ năng   // Ensure that 'as' matches the alias defined in your model associations
          },{
            model: db.Levels, // Assuming Roles is the table for user roles
            as :'level',  
            through : { attributes: [] }, // Không hiển thị bảng trung gian
            attributes: ['id','name'] // Lấy tên các kỹ năng   // Ensure that 'as' matches the alias defined in your model associations
          }
        
        ],
      
      });
      if (jbp) {
        return { status: 200, code: 0, message: "success", data: jbp };
      } else {
        return { status: 500, code: -1, message: "error", data: "" };
      }
    };
    const getJobpostByID  = async (id) => {
    
      // Fetch the user from the database based on username and include their associated role (Group)
      const jbp = await db.JobPosts.findOne({
        where :{id:id
},
      
        include: [
          {
            model: db.Employers, // Assuming Roles is the table for user roles
            as: "employer",     // Ensure that 'as' matches the alias defined in your model associations
          },
          {
            model: db.Skills, // Assuming Roles is the table for user roles
            as :'skill', 
            through: { attributes: [] }, // Không hiển thị bảng trung gian
            // attributes: ['name'] // Lấy tên các kỹ năng    // Ensure that 'as' matches the alias defined in your model associations
          },{
            model: db.Levels, // Assuming Roles is the table for user roles
            as : 'level',  
            through: { attributes: [] }, // Không hiển thị bảng trung gian
            // attributes: ['name'] // Lấy tên các kỹ năng   // Ensure that 'as' matches the alias defined in your model associations
          },

        
        ],
      });
      console.log ("fdsf",jbp)
      if (jbp) {
        return { status: 200, code: 0, message: "success", data: jbp };
      } else {
        return { status: 500, code: -1, message: "error", data: "" };
      }
    };
    const searchJobPostsByKeyword = async (keyword) => {
      
        const jobPosts = await db.JobPosts.findAll({
          include: [
            {
              model: db.Skills,
              as: 'skill',
              // where: keyword ? { name: { [Op.like]: `%${keyword}%` } } : {},
              attributes: ['name'],
              through: { attributes: [] },
              required: false, // Không bắt buộc phải có Skills
            },
            {
              model: db.Employers,
              as: 'employer',
              // where: keyword ? { name: { [Op.like]: `%${keyword}%` } } : {},
              required: false, // Không bắt buộc phải có Employers
            }

          ],
          where: {
            [Op.or]: [
              // Nếu có Skills phù hợp
              {
                '$skill.name$': { [Op.like]: `%${keyword}%` },
              },
              // Nếu có Employers phù hợp
              {
                '$employer.name$': { [Op.like]: `%${keyword}%` },
              }
            ]
          }

        });
        console.log("serchec",jobPosts)
    
        if (jobPosts) {
          return { status: 200, code: 0, message: "success", data: jobPosts };
        } else {
          return { status: 500, code: -1, message: "error", data: "" };
        }
    };

    

module.exports ={ getAllJobpost,getJobpostByID,searchJobPostsByKeyword}