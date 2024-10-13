'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('JobPosts', [
      {
        id: 1,
        title: 'Frontend Developer',
        mota: 'Develop and maintain web applications using React.js.',
        Ngayhethan: new Date('2024-12-01'),
        location: 'Hanoi, Vietnam',
        employers_id: 1,  // Giả định employer_id 1 đã tồn tại trong bảng Employers
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        title: 'Backend Developer',
        mota: 'Build and maintain scalable APIs using Node.js.',
        Ngayhethan: new Date('2024-11-20'),
        location: 'Ho Chi Minh City, Vietnam',
        employers_id: 2,  // Giả định employer_id 2 đã tồn tại trong bảng Employers
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        title: 'DevOps Engineer',
        mota: 'Implement CI/CD pipelines and manage cloud infrastructure.',
        Ngayhethan: new Date('2024-10-15'),
        location: 'Da Nang, Vietnam',
        employers_id: 3,  // Giả định employer_id 3 đã tồn tại trong bảng Employers
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('JobPosts', null, {});
  }
};
