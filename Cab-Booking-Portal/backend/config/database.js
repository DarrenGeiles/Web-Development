// backend/config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME || 'cab_booking',
  process.env.DB_USER || 'postgres_user',
  process.env.DB_PASSWORD || 'postgres_pass',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: false,
  }
);

module.exports = sequelize;
