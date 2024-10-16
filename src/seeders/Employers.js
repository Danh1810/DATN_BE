module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Nhatuyendung", [
      {
        ten: "Công ty ABC",
        email: "abc@company.com",
        sdt: "0123456789",
        nghanhnghe: "Công nghệ thông tin",
        diachi: "123 Đường XYZ, Hà Nội",
        user_id: 1,
        logo: "abc-logo.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ten: "Công ty DEF",
        email: "def@company.com",
        sdt: "0987654321",
        nghanhnghe: "Phát triển phần mềm",
        diachi: "456 Đường ABC, TP. Hồ Chí Minh",
        user_id: 2,
        logo: "def-logo.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Nhatuyendung", null, {});
  },
};