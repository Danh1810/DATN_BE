'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nhatuyendung extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Một Employer có nhiều JobPosts
      Nhatuyendung.hasMany(models.Tintuyendung, {
        foreignKey: 'tintuyendung_id',
        as: 'jobPosts',
      });

      // Một Employer có nhiều SaveJobs
      // Employers.hasMany(models.SaveJob, {
      //   foreignKey: 'employers_id',
      //   as: 'saveJobs',
      // });

      // Một Employer thuộc về một User
      Nhatuyendung.belongsTo(models.Users, {
        foreignKey: 'user_id',
        as: 'user',
      });
    }
  }
  Employers.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sdt: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nganhnghe: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    diachi: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Nhatuyendung',
    tableName: 'Nhatuyendung',
    timestamps: true, // Sẽ tự động thêm createdAt và updatedAt
  });
  return Nhatuyendung;
};

