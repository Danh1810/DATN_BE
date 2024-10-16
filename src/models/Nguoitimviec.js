'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Nguoitimviec extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Nguoitimviec.belongsTo(models.Users, {
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
  Nguoitimviec.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false, // Có thể chỉnh sửa tùy thuộc vào yêu cầu của bạn
    },
    ten: {
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
    gioitinh: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fileCV:{
      type:DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Nguoitimviec',
    tableName: 'Nguoitimviec',
    timestamps: true, // Sẽ tự động thêm createdAt và updatedAt
  });
  return Nguoitimviec;
};
