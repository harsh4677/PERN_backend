'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    userType: {
      type: DataTypes.ENUM('0', '1', '2'),
      allowNull: false,  // Optional: Consider making this required
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,  // Optional: Consider making this required
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,  // Optional: Consider making this required
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,  // Optional: Consider making this required
      unique: true,      // Optional: Ensure email is unique
      validate: {
        isEmail: true,   // Optional: Validate email format
      }
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    deletedAt: {
      type: DataTypes.DATE,
    }
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'User',
    tableName: 'Users',  // Make sure your table name matches the one in migrations
    paranoid: true,       // Enables soft deletes
    timestamps: true,     // Enables createdAt and updatedAt timestamps
  });

  return User;
};
