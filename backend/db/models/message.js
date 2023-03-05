"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate(models) {
      Message.belongsTo(models.User, { foreignKey: "senderId" });
      Message.belongsTo(models.User, { foreignKey: "recipientId" });
    }
  }
  Message.init(
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      seen: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      senderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      recipientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Message",
    }
  );
  return Message;
};
