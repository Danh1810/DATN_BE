const db =require("../models/index")

// const getAllClass = async (limit, page, grade_id, schoolyear_id) => {
//   if (!limit) limit = 10;
//   if (!page) page = 1;
//   const offset = (page - 1) * limit;
//   try {
//     const condition1 = grade_id ? { grade_id: grade_id } : {};
//     const condition2 = schoolyear_id ? { schoolyear_id: schoolyear_id } : {};
//     const { count, rows } = await db.Classes.findAndCountAll({
//       where: { ...condition1, ...condition2, ishidden: 0 },
//       include: [
//         {
//           model: db.Users,
//           as: "GVCN",
//           include: {
//             model: db.Profiles,
//             attributes: ["firstname", "lastname"],
//           },
//         },
//         {
//           model: db.Schoolyears,
//           attributes: ["name"],
//         },
//       ],
//       limit: +limit,
//       offset: +offset,
//       raw: true,
//       nest: true,
//     });

//     return {
//       status: 200,
//       code: 0,
//       message: "success",
//       data: { rows, count },
//     };
//   } catch (error) {
//     return { status: 500, code: -1, message: error.message, data: "" };
//   }
// };
// const getClasses = async () => {
//   try {
//     const res = await db.Classes.findAll({
//       where: { ishidden: 0 },
//       include: [
//         {
//           model: db.Users,
//           as: "GVCN",
//           include: {
//             model: db.Profiles,
//             attributes: ["firstname", "lastname"],
//           },
//         },
//         { model: db.Schoolyears, attributes: ["name"] },
//       ],
//     });
//     if (res) {
//       return { status: 200, code: 0, message: "success", data: res };
//     } else {
//       return { status: 500, code: 1, message: "fail", data: "" };
//     }
//   } catch (error) {
//     return { status: 500, code: -1, message: error.message, data: "" };
//   }
// };
const getEmployersById = async (id) => {
  try {
    const res = await db.Employers.findOne({
      where: { id: id}
    });
    if (res) {
      return { status: 200, code: 0, message: "success", data: res };
    } else {
      return { status: 500, code: 1, message: "fail", data: "" };
    }
  } catch (error) {
    return { status: 500, code: -1, message: error.message, data: "" };
  }
};
// const createClass = async (data) => {
//   try {
//     const res = await db.Classes.bulkCreate(data);
//     if (res) {
//       return { status: 200, code: 0, message: "success", data: res };
//     } else {
//       return { status: 500, code: 1, message: "fail", data: "" };
//     }
//   } catch (error) {
//     return { status: 500, code: -1, message: error.message, data: "" };
//   }
// };
// const updateClass = async (data) => {
//   try {
//     const res = await db.Classes.update(data, { where: { id: data.id } });
//     if (res) {
//       return { status: 200, code: 0, message: "success", data: res };
//     } else {
//       return { status: 500, code: 1, message: "fail", data: "" };
//     }
//   } catch (error) {
//     return { status: 500, code: -1, message: error.message, data: "" };
//   }
// };
// const hiddenClass = async (data) => {
//   console.log(data);
//   try {
//     const res = await db.Classes.update(
//       {
//         ishidden: data.ishidden,
//       },
//       { where: { id: data.id } }
//     );
//     if (res) {
//       return { status: 200, code: 0, message: "success", data: res };
//     } else {
//       return { status: 500, code: 1, message: "fail", data: "" };
//     }
//   } catch (error) {
//     return { status: 500, code: -1, message: error.message, data: "" };
//   }
// };
// const getStudentByClassId = async (classId) => {
//   try {
//     const res = await db.Classes.findOne({
//       include: [
//         {
//           model: db.Users,
//           as: "Class_Students",
//           through: { attributes: [] },
//           include: {
//             model: db.Profiles,
//             attributes: ["id", "firstname", "lastname"],
//           },
//         },
//         { model: db.Schoolyears, attributes: ["name"] },
//       ],
//       where: { id: classId },
//     });
//     if (res) {
//       return { status: 200, code: 0, message: "success", data: res };
//     } else {
//       return { status: 500, code: 1, message: "fail", data: "" };
//     }
//   } catch (error) {
//     return { status: 500, code: 1, message: error.message, data: [] };
//   }
// };
// const kickUserFromClass = async (data) => {
//   try {
//     const res = await db.Class_User.destroy({
//       where: { class_id: data.class_id, user_id: data.user_id },
//     });
//     if (res) {
//       return { status: 200, code: 0, message: "success", data: res };
//     } else {
//       return { status: 500, code: 1, message: "fail", data: "" };
//     }
//   } catch (error) {
//     return { status: 500, code: -1, message: error.message, data: "" };
//   }
// };
// const addStudentToClass = async (data) => {
//   try {
//     const res = await db.Class_User.bulkCreate(data);
//     if (res) {
//       return { status: 200, code: 0, message: "success", data: res };
//     } else {
//       return { status: 500, code: 1, message: "fail", data: "" };
//     }
//   } catch (error) {
//     return { status: 500, code: -1, message: error.message, data: "" };
//   }
// };
// const getSubjectsByClassId = async (classId) => {
//   try {
//     const res = await db.Classes.findOne({
//       include: [
//         {
//           as: "Class_Subjects",
//           model: db.Subjects,
//           through: { attributes: [], where: { ishidden: 0 } },
//           include: {
//             model: db.Users,
//             as: "Subject_Users",
//             through: { attributes: [], where: { class_id: classId } },
//             include: {
//               model: db.Profiles,
//               attributes: ["id", "firstname", "lastname"],
//             },
//           },
//         },
//       ],
//       where: { id: classId },
//     });

//     if (res) {
//       return {
//         status: 200,
//         code: 0,
//         message: "success",
//         data: res,
//       };
//     } else {
//       return { status: 500, code: 1, message: "fail", data: "" };
//     }
//   } catch (error) {
//     return { status: 500, code: -1, message: error.message, data: "" };
//   }
// };
// const deleteSubjectFromClass = async (data) => {
//   try {
//     console.log(data);
//     const res = await db.Class_Subject_User.destroy({
//       where: {
//         class_id: +data.class_id,
//         subject_id: +data.subject_id,
//         teacher_id: +data.teacher_id,
//       },
//     });
//     if (res) {
//       return { status: 200, code: 0, message: "success", data: res };
//     } else {
//       return { status: 500, code: 1, message: "fail", data: "" };
//     }
//   } catch (error) {
//     return { status: 500, code: -1, message: error.message, data: "" };
//   }
// };
// const countClassesByGrade = async (grade_id) => {
//   try {
//     const res = await db.Classes.count({
//       where: { grade_id: grade_id, ishidden: 0 },
//     });
//     if (res) {
//       return { status: 200, code: 0, message: "success", data: res };
//     } else {
//       return { status: 500, code: 1, message: "fail", data: "" };
//     }
//   } catch (error) {
//     return { status: 500, code: -1, message: error.message, data: "" };
//   }
// };
// const getGradeByClassId = async (class_id) => {
//   try {
//     const res = await db.Classes.findOne({
//       where: { id: class_id },
//       include: {
//         model: db.Grades,
//         attributes: ["id", "name"],
//       },
//     });
//     if (res) {
//       return { status: 200, code: 0, message: "success", data: res.Grade };
//     } else {
//       return { status: 500, code: 1, message: "fail", data: "" };
//     }
//   } catch (error) {
//     return { status: 500, code: -1, message: error.message, data: "" };
//   }
// };
// const getClassesBySchoolyear = async (schoolyear_id) => {
//   try {
//     const res = await db.Classes.findAll({
//       where: { schoolyear_id: schoolyear_id },
//       include: [
//         {
//           model: db.Users,
//           as: "GVCN",
//           include: {
//             model: db.Profiles,
//             attributes: ["firstname", "lastname"],
//           },
//         },
//         { model: db.Schoolyears, attributes: ["name"] },
//       ],
//     });
//     if (res) {
//       return { status: 200, code: 0, message: "success", data: res };
//     } else {
//       return { status: 500, code: 1, message: "fail", data: "" };
//     }
//   } catch (error) {
//     return { status: 500, code: -1, message: error.message, data: "" };
//   }
// };
module.exports = {
  getEmployersById
 
};