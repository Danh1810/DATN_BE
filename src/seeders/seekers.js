"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Nguoitimviec", [
      {
        email: "nguoitimviec1@example.com",
        ten: "Nguyễn Văn A",
        SDT: "0123456789",
        user_id: 1,
        gioitinh: true,
        fileCV: "cv-nguyenvana.pdf",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "nguoitimviec2@example.com",
        ten: "Trần Thị B",
        SDT: "0987654321",
        user_id: 2,
        gioitinh: false,
        fileCV: "cv-tranthib.pdf",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Nguoitimviec", null, {});
  },
};
