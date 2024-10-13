// Migration để tạo bảng trung gian JobPostSkills
'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('JobPostLevels', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
          },
      jobpost_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      
      },
      level_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
       
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('JobPostLevels');
  }
};
