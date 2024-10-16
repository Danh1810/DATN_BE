'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tintuyendung extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Một JobPost thuộc về một Employer
      Tintuyendung.belongsTo(models.Nhatuyendung, {
        foreignKey: 'nhatuyendung_id',
        as: 'employer',
      });
      Tintuyendung.belongsToMany(models.Kynang, {through :"Tintd_Kynang",  foreignKey: 'tintuyendung_id' ,as :'skill'});
      Tintuyendung.belongsToMany(models.Capbac, {through :"Tintd_Capbac",  foreignKey: 'tintuyendung_id',as : 'level' });

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
  Tintuyendung.init({
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
    trangthai: {
      type: DataTypes.STRING,
    },
    mucluong: {
      type: DataTypes.STRING,
    },
    nhatuyendung_id: {
      type: DataTypes.INTEGER,
    },

  }, {
    sequelize,
    modelName: 'Tintuyendung',
    tableName: 'Tintuyendung',
    timestamps: true, // Tự động thêm createdAt và updatedAt
  });
  return Tintuyendung;
};
