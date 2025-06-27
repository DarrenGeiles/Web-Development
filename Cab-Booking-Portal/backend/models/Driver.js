// backend/models/Driver.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Driver = sequelize.define('Driver', {
  driverId: { type: DataTypes.STRING, primaryKey: true },
  name: DataTypes.STRING,
  phone: DataTypes.STRING,
  licenseNo: DataTypes.STRING,
  vehicleType: DataTypes.STRING,
  status: { type: DataTypes.STRING, defaultValue: 'Available' }
}, { timestamps: true });

module.exports = Driver;
