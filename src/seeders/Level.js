'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Caobac', [
      {
        id: 1,
        ten: 'Junior',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        ten: 'Mid-level',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        ten: 'Senior',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        ten: 'Lead',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        ten: 'Principal',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Capbac', null, {});
  }
};
