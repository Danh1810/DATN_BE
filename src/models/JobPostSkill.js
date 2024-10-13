// models/JobPostSkills.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class JobPostSkills extends Model {
    static associate(models) {
      JobPostSkills.belongsTo(models.JobPosts, {
        foreignKey: 'jobpost_id',
        as: 'jobPostst'
      });
      JobPostSkills.belongsTo(models.Skills, {
        foreignKey: 'skill_id',
        as: 'sdfghhjhh'
      });
    }
  }

  JobPostSkills.init({
    jobpost_id: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: 'JobPosts', // name of the target model
      //   key: 'id', // key in the target model
      // },
    },
    skill_id: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: 'Skills', // name of the target model
      //   key: 'id', // key in the target model
      // },
    },
  }, {
    sequelize,
    modelName: 'JobPostSkills',
    tableName: 'JobPostSkills',
    timestamps: true, // Optional: set to true if you want createdAt/updatedAt
  });

  return JobPostSkills;
};
