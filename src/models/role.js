"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Roles.hasMany(models.Users, { foreignKey: "group_id", as: "Group" });
    //   Role.belongsToMany(models.Roles, {
    //     as: "Group_Roles",
    //     through: "Group_Role",
    //     foreignKey: "group_id",
    //   });
    }
  }
  Roles.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      URL: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "Roles",
    }
  );
  return Roles;
};