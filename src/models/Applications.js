'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Applications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Một Application thuộc về một JobPost
      // Applications.belongsTo(models.JobPost, {
      //   foreignKey: 'JobPost_id',
      //   as: 'jobPost',
      // });

      // Một Application thuộc về một JobSeeker
      // Applications.belongsTo(models.JobSeeker, {
      //   foreignKey: 'seeker_id',
      //   as: 'jobSeeker',
      // });
    }
  }
  Applications.init({
    file: {
      type: DataTypes.STRING,
    },
    NgayNop: {
      type: DataTypes.DATE,
    },
    seeker_id: {
      type: DataTypes.INTEGER,
    },
    JobPost_id: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Applications',
    tableName: 'Applications',
    timestamps: true, // Sẽ tự động thêm createdAt và updatedAt
  });
  return Applications;
};
