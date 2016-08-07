const Sequelize = require('sequelize');

require('dotenv').config();
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

const user = sequelize.define('user',{
  name: {
    type: Sequelize.STRING,
  },
});

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

user.hasMany(app, {
  foreignKey: 'userID',
})

console.log('database about to be syncd');
sequelize.sync();
console.log('database syncd');

exports.sequelize = sequelize;
exports.user = user;
exports.app = app;
