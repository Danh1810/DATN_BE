// models/JobPostSkills.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tintd_Capbac extends Model {
    static associate(models) {
      Tintd_Capbac.belongsTo(models.JobPosts, {
        foreignKey: 'tintuyendung_id',
        as: 'jobPostssdff'
      });
      Tintd_Capbac.belongsTo(models.Levels, {
        foreignKey: 'capbac_id',
        as: 'leveldfgghh'
      });
      // Define associations here if needed
    }
  }

  JobPostLevels.init({
    tintuyendung_id: {
      type: DataTypes.INTEGER,
    },
    capbac_id: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: 'Skills', // name of the target model
      //   key: 'id', // key in the target model
      // },
    },
  }, {
    sequelize,
    modelName: 'Tintd_Capbac',
    tableName: 'Tintd_Capbac',
    timestamps: true, // Optional: set to true if you want createdAt/updatedAt
  });

  return Tintd_Capbac;
};
