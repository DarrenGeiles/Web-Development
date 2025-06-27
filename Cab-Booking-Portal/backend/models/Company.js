// backend/models/Company.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Company = sequelize.define('Company', {
  companyId: { type: DataTypes.STRING, primaryKey: true },
  companyName: DataTypes.STRING,
  address: DataTypes.STRING,
  contact: DataTypes.STRING
}, { timestamps: true });

module.exports = Company;
