// backend/controllers/bookingController.js
const { v4: uuidv4 } = require('uuid');
const Booking = require('../models/Booking');
const publishBooking = require('../services/rabbitPublisher');

exports.createBooking = async (req, res) => {
  try {
    const bookingData = {
      bookingId: uuidv4(),
      companyName: req.body.companyName,
      employeeName: req.body.employeeName,
      date: req.body.date,
      time: req.body.time,
      pickupLocation: req.body.pickupLocation,
      dropLocation: req.body.dropLocation,
      carType: req.body.carType,
    };
    const booking = await Booking.create(bookingData);

    // Publish the new booking to RabbitMQ
    await publishBooking(bookingData);

    res.status(201).json({ success: true, booking });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
