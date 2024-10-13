'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Employers', [
      {
        id: 1,
        name: 'Tech Company A',
        email: 'contact@techa.com',
        sdt: '0123456789',
        profession: 'Software Development',
        address: '123 Main St, City A',
        user_id: 1,  // Giả định rằng user_id 1 đã tồn tại trong bảng Users
        logo: 'https://example.com/logos/techa.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Innovative Solutions B',
        email: 'hr@innovativeb.com',
        sdt: '0987654321',
        profession: 'IT Consulting',
        address: '456 Elm St, City B',
        user_id: 2,  // Giả định rằng user_id 2 đã tồn tại trong bảng Users
        logo: 'https://example.com/logos/innovativeb.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: 'Global Tech C',
        email: 'info@globaltechc.com',
        sdt: '0112233445',
        profession: 'Cloud Services',
        address: '789 Oak St, City C',
        user_id: 3,  // Giả định rằng user_id 3 đã tồn tại trong bảng Users
        logo: 'https://example.com/logos/globaltechc.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Employers', null, {});
  }
};