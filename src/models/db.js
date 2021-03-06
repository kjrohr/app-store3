// Makes an instance of sequelize module, and sets it to the Sequelize variabele
const Sequelize = require('sequelize');

// This file requires the dotenv.config module and method
require('dotenv').config();

// Makes a new instance of Sequelize and sets it to sequelize
// Takes data from .env file to set up the database
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_SCHEMA,
  port: process.env.DB_PORT,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  logging: false,
});

// Defines user table, with name column
const user = sequelize.define('user',{
  name: {
    type: Sequelize.STRING,
  },
});

// Defines app table, with name, description, and releaseDate columns
const app = sequelize.define('app', {
  name: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  releaseDate: {
    type: Sequelize.STRING,
  }
});

// User has many app relationship
user.hasMany(app, {
  foreignKey: 'userID',
})

// Syncs up to the mysql database
sequelize.sync();

// Exports sequelize as sequelize
exports.sequelize = sequelize;

// Exports user
exports.user = user;

// Exports app as app
exports.app = app;
