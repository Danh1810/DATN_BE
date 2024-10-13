"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      // Một User có nhiều Employers
      Users.hasMany(models.Employers, {
        foreignKey: 'user_id',
        as: 'user',
      });
      Users.hasMany(models.JobSeekers, {
        foreignKey: 'user_id',
        as: 'user_seeker',
      });
      Users.belongsTo(models.Roles, { foreignKey: "group_id", as: "Group" });
    }
    
    }
  Users.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      username: DataTypes.STRING,
      group_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};