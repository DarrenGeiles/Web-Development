// backend/services/vendorResponsePublisher.js
const connectRabbitMQ = require('../config/rabbitmq');

async function publishVendorResponse(responseData) {
  try {
    const channel = await connectRabbitMQ();
    const queue = 'vendor_responses';
    await channel.assertQueue(queue, { durable: true });
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(responseData)), { persistent: true });
    console.log(`Published vendor response for booking ${responseData.bookingId}`);
  } catch (error) {
    console.error('Error publishing vendor response:', error.message);
  }
}

module.exports = publishVendorResponse;
