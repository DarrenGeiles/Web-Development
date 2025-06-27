// backend/services/rabbitPublisher.js
const connectRabbitMQ = require('../config/rabbitmq');

async function publishBooking(bookingData) {
  try {
    const channel = await connectRabbitMQ();
    const queue = 'booking_requests';
    await channel.assertQueue(queue, { durable: true });
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(bookingData)), { persistent: true });
    console.log(`Published booking request: ${bookingData.bookingId}`);
  } catch (error) {
    console.error('Error publishing booking:', error.message);
  }
}

module.exports = publishBooking;
