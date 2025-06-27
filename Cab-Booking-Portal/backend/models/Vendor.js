// backend/models/Vendor.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Vendor = sequelize.define('Vendor', {
  vendorId: { type: DataTypes.STRING, primaryKey: true },
  name: DataTypes.STRING,
  companyName: DataTypes.STRING,
  phone: DataTypes.STRING,
  region: DataTypes.STRING
}, { timestamps: true });

module.exports = Vendor;
