const { Model, DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  class Kynang extends Model {
    static associate(models) {

      Kynang.belongsToMany(models.Tintuyendung, { through :"Tintd_Kynang", foreignKey: 'kynang_id' ,as :'Jobpostttt'});
    }
  }
  Kynang.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'Kynang',
    tableName: 'Kynang',
    timestamps: true,
  });
  return Kynang;
};
