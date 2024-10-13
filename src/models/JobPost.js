'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JobPosts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Một JobPost thuộc về một Employer
      JobPosts.belongsTo(models.Employers, {
        foreignKey: 'employers_id',
        as: 'employer',
      });
      JobPosts.belongsToMany(models.Skills, {through :"JobPostSkills",  foreignKey: 'jobpost_id' ,as :'skill'});
      JobPosts.belongsToMany(models.Levels, {through :"JobPostLevels",  foreignKey: 'jobpost_id',as : 'level' });

    //  JobPosts.hasMany(models. Application,{
    //     foreignKey : 'JobPost_id',
    //     as :'jobPost'
    //  })
    //   JobPosts.hasMany(models.SaveJob, {
    //     foreignKey: 'Jobpost_id',
    //     as: 'jobP',
    //   });
    }
  }
  JobPosts.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mota: {
      type: DataTypes.STRING,
    },
    Ngayhethan: {
      type: DataTypes.DATE,
    },
    location: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
    employers_id: {
      type: DataTypes.INTEGER,
    },

  }, {
    sequelize,
    modelName: 'JobPosts',
    tableName: 'JobPosts',
    timestamps: true, // Tự động thêm createdAt và updatedAt
  });
  return JobPosts;
};
