module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Tintuyendung", [
      {
        tieude: "Tuyển dụng lập trình viên Frontend",
        mota: "Cần tuyển lập trình viên Frontend có kinh nghiệm với React.",
        Ngayhethan: new Date("2024-12-31"),
        nhatuyendung_id: 1,
        trangthai: "Đang tuyển",
        diachi: "123 Đường XYZ, Hà Nội",
        mucluong: "20-25 triệu",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tieude: "Tuyển dụng kỹ sư phần mềm Backend",
        mota: "Cần tuyển kỹ sư Backend có kinh nghiệm với Node.js và MongoDB.",
        Ngayhethan: new Date("2024-11-30"),
        nhatuyendung_id: 2,
        trangthai: "Đang tuyển",
        diachi: "456 Đường ABC, TP. Hồ Chí Minh",
        mucluong: "30-35 triệu",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Tintuyendung", null, {});
  },
};