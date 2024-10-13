"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Roles", [
      {
        name: "admin",
        description: "admin",
        URL: JSON.stringify(['/jb', '/search']),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "ntd",
        description: "Nhà Tuyển dụng",
        URL: JSON.stringify(['/jb', '/search']),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "ntv",
        description: "Người tìm việc",
        URL: JSON.stringify(['/jb', '/search']),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Roles", null, {});
  },
};