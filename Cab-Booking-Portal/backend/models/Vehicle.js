// backend/models/Vehicle.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Vehicle = sequelize.define('Vehicle', {
  vehicleId: { type: DataTypes.STRING, primaryKey: true },
  plateNumber: DataTypes.STRING,
  model: DataTypes.STRING,
  condition: DataTypes.STRING,
  available: { type: DataTypes.BOOLEAN, defaultValue: true }
}, { timestamps: true });

module.exports = Vehicle;
