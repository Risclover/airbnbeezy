"use strict";
const bcrypt = require("bcryptjs");
const { Model, Validator } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    toSafeObject() {
      const { id, username, email, firstName, lastName, profileImageUrl } =
        this;
      return { id, username, email, firstName, lastName, profileImageUrl };
    }

    validatePassword(password) {
      return bcrypt.compareSync(password, this.hashedPassword.toString());
    }

    static getCurrentUserById(id) {
      return User.scope("currentUser").findByPk(id);
    }

    static async login({ credential, password }) {
      const { Op } = require("sequelize");
      const user = await User.scope("loginUser").findOne({
        where: {
          [Op.or]: {
            username: credential,
            email: credential,
          },
        },
      });
      if (user && user.validatePassword(password)) {
        return await User.scope("currentUser").findByPk(user.id);
      }
    }

    static async signup({
      username,
      email,
      password,
      firstName,
      lastName,
      profileImageUrl,
    }) {
      const hashedPassword = bcrypt.hashSync(password);

      const user = await User.create({
        firstName,
        lastName,
        username,
        email,
        hashedPassword,
        profileImageUrl,
      });
      return await User.scope("currentUser").findByPk(user.id);
    }

    static associate(models) {
      User.hasMany(models.Booking, { foreignKey: "userId" });
      User.hasMany(models.Review, { foreignKey: "userId" });
      User.hasMany(models.Spot, { foreignKey: "ownerId" });
      User.hasMany(models.UserImage, { foreignKey: "userId" });
      User.hasMany(models.Message, { foreignKey: "senderId" });
      User.hasMany(models.Message, { foreignKey: "recipientId" });
    }
  }

  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4, 30],
          isNotEmail(value) {
            if (Validator.isEmail(value)) {
              throw new Error("Cannot be an email.");
            }
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 256],
          isEmail: true,
        },
      },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
        validate: {
          len: [60, 60],
        },
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      about: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      work: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      profileImageUrl: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "User",
      defaultScope: {
        attributes: {
          exclude: ["hashedPassword", "email", "updatedAt"],
        },
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ["hashedPassword"] },
        },
        loginUser: {
          attributes: {},
        },
      },
    }
  );
  return User;
};
