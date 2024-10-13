"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("JobPosts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      mota: {
        type: Sequelize.STRING,
      },
      Ngayhethan: {
        type: Sequelize.DATE,
      },
      Ngayhethan: {
        type: Sequelize.DATE,
      },
      location: {
        type: Sequelize.STRING,
      },
      employers_id: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    },
    {
      charset: 'utf8', // Set the character set for the entire table
      collate: 'utf8_general_ci', // Set the collation for the entire table
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("JobPosts");
  },
};