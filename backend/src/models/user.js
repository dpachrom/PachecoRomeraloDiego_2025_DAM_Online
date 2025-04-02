const {  DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class User extends Model {}

User.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {msg: 'Must be a valid email'}
      }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  },
  {
    sequelize, // We need to pass the connection instance
    modelName: 'User', // We need to choose the model name
    tableName: 'Users',
    timestamps: false,
  },
);

// the defined model is the class itself
console.log(User === sequelize.models.User); // true

module.exports = User;