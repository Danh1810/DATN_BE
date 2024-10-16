const db = require("../models/index");  // Remove .js for CommonJS
const getRolesByGroupId = async (id) => {
  const roles = await db.Roles.findAll({
  
      where: { id: id },
      attributes: [],
    
    attributes: ["id", "URL","name"],
    raw: true,
    nest: true,
  });
  if (roles) {
    return { status: 200, code: 0, message: "success", data: roles };
  } else {
    return { status: 500, code: 1, message: "fail", data: "" };
  }
};
module.exports = {getRolesByGroupId} ;