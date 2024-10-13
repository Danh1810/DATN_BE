'use strict';
const { Model } = require('sequelize');
const jobSeekers = require('../migrations/job seekers');
module.exports = (sequelize, DataTypes) => {
  class JobSeekers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      JobSeekers.belongsTo(models.Users, {
        foreignKey: 'user_id',
        as: 'user_seeker',
      });
      
      // JobSeekers.hasMany(models.Applications, { foreignKey: 'seeker_id' });
      
      // JobSeekers.hasMany(models.Messages, { foreignKey: 'seeker_id' });
      // JobSeekers.hasMany(models.SavedJobs, {
      //   foreignKey: 'seeker_id',
      //   as: 'savedJobs'
      // });
    }
  }
  JobSeekers.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false, // Có thể chỉnh sửa tùy thuộc vào yêu cầu của bạn
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    SDT: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    gender: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fileCV:{
      type:DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'JobSeekers',
    tableName: 'JobSeekers',
    timestamps: true, // Sẽ tự động thêm createdAt và updatedAt
  });
  return JobSeekers;
};
