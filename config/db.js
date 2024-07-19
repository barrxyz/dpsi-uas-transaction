const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,   // Database name
  process.env.DATABASE_USER,   // Database user
  process.env.DATABASE_PASSWORD, // Database password
  {
    host: process.env.DATABASE_HOST, // Database host
    port: process.env.DATABASE_PORT, // Database port
    dialect: 'mysql',
    dialectModule: require('mysql2'),
    logging: console.log,
  }
);

sequelize.sync()
  .then(() => {
    console.log('Database synchronized');
  })
  .catch(err => {
    console.error('Error synchronizing database:', err);
  });

module.exports = sequelize;
