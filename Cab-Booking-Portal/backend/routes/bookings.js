// backend/routes/bookings.js
const express = require('express');
const router = express.Router();
const auth = require('../config/auth');
const bookingController = require('../controllers/bookingController');

// Only logged-in companies can create bookings
router.post('/create', auth('company'), bookingController.createBooking);

// Fetch all bookings — companies or vendors can view
router.get('/all', auth(), bookingController.getAllBookings);

module.exports = router;
