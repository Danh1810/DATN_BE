// models/JobPostSkills.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class JobPostLevels extends Model {
    static associate(models) {
      JobPostLevels.belongsTo(models.JobPosts, {
        foreignKey: 'jobpost_id',
        as: 'jobPostssdff'
      });
      JobPostLevels.belongsTo(models.Levels, {
        foreignKey: 'level_id',
        as: 'leveldfgghh'
      });
      // Define associations here if needed
    }
  }

  JobPostLevels.init({
    jobpost_id: {
      type: DataTypes.INTEGER,
    },
    level_id: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: 'Skills', // name of the target model
      //   key: 'id', // key in the target model
      // },
    },
  }, {
    sequelize,
    modelName: 'JobPostLevels',
    tableName: 'JobPostLevels',
    timestamps: false, // Optional: set to true if you want createdAt/updatedAt
  });

  return JobPostLevels;
};
