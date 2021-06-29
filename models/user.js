'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    document_type: DataTypes.INTEGER,
    document: DataTypes.STRING,
    password: DataTypes.STRING,
    born_date: DataTypes.DATE,
    city: DataTypes.INTEGER,
    picture: DataTypes.BLOB
    
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};