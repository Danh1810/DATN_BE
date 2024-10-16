// models/JobPostSkills.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tintd_Kynang extends Model {
    static associate(models) {
      Tintd_Kynang.belongsTo(models.Tintuyendung, {
        foreignKey: 'tintuyendung_id',
        as: 'jobPostst'
      });
     Tintd_Kynang.belongsTo(models.Kynang, {
        foreignKey: 'kynang_id',
        as: 'sdfghhjhh'
      });
    }
  }

  Tintd_Kynang.init({
    tintuyendung_id: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: 'JobPosts', // name of the target model
      //   key: 'id', // key in the target model
      // },
    },
    kynang_id: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: 'Skills', // name of the target model
      //   key: 'id', // key in the target model
      // },
    },
  }, {
    sequelize,
    modelName: 'Tintd_Kynang',
    tableName: 'Tintd_Kynang',
    timestamps: true, // Optional: set to true if you want createdAt/updatedAt
  });

  return Tintd_Kynang;
};
