module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('JobSeekers', [
      {
        id: 1,
        email: 'john.doe@example.com',
        username: 'john_doe',
        SDT: '0123456789',
        user_id: 1,  // Giả sử user_id 1 tồn tại trong bảng Users
        gender: 0,
        fileCV: 'https://example.com/cv/johndoe.pdf',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        email: 'jane.doe@example.com',
        username: 'jane_doe',
        SDT: '0987654321',
        user_id: 2,  // Giả sử user_id 2 tồn tại trong bảng Users
        gender: 1,
        fileCV: 'https://example.com/cv/janedoe.pdf',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        email: 'alex.smith@example.com',
        username: 'alex_smith',
        SDT: '0123987654',
        user_id: 3,  // Giả sử user_id 3 tồn tại trong bảng Users
        gender: 0,
        fileCV: 'https://example.com/cv/alexsmith.pdf',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('JobSeekers', null, {});
  }
};