// backend/models/Booking.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Booking = sequelize.define('Booking', {
  bookingId: { type: DataTypes.STRING, primaryKey: true },
  companyName: DataTypes.STRING,
  employeeName: DataTypes.STRING,
  date: DataTypes.DATEONLY,
  time: DataTypes.TIME,
  pickupLocation: DataTypes.STRING,
  dropLocation: DataTypes.STRING,
  carType: DataTypes.STRING,
  status: { type: DataTypes.STRING, defaultValue: 'Pending' }
}, { timestamps: true });

module.exports = Booking;
