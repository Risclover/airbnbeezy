"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserImage extends Model {
    static associate(models) {
      UserImage.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  UserImage.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "UserImage",
    }
  );
  return UserImage;
};
