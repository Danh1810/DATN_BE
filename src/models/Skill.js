const { Model, DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  class Skills extends Model {
    static associate(models) {

      Skills.belongsToMany(models.JobPosts, { through :"JobPostSkills", foreignKey: 'skill_id' ,as :'Jobpostttt'});
    }
  }
  Skills.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'Skills',
    tableName: 'Skills',
    timestamps: false,
  });
  return Skills;
};
