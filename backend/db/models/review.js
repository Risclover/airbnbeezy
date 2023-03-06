"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      Review.hasMany(models.ReviewImage, { foreignKey: "reviewId" });
      Review.belongsTo(models.User, { foreignKey: "userId" });
      Review.belongsTo(models.Spot, { foreignKey: "spotId" });
    }
  }
  Review.init(
    {
      spotId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      review: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stars: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 5,
        },
      },
      hasResponse: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Review",
    }
  );
  return Review;
};
