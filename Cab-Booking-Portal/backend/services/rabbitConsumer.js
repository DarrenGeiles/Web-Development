// backend/services/rabbitConsumer.js
const connectRabbitMQ = require('../config/rabbitmq');

async function consumeBookings(callback) {
  try {
    const channel = await connectRabbitMQ();
    const queue = 'booking_requests';
    await channel.assertQueue(queue, { durable: true });

    channel.consume(queue, (msg) => {
      if (msg !== null) {
        const booking = JSON.parse(msg.content.toString());
        callback(booking); // handle booking in the vendor app
        channel.ack(msg);
      }
    });

    console.log(`Vendor listening on ${queue}`);
  } catch (error) {
    console.error('Error consuming bookings:', error.message);
  }
}

module.exports = consumeBookings;
