const AWS = require('aws-sdk');
const apn = require('apn');

exports.handler = async (event) => {
  // Set up the APN provider
  const provider = new apn.Provider({
    certificate: 'path/to/certificate.pem',
    key: 'path/to/key.pem',
  });

  // Set up for the notification
  const notification = new apn.Notification();
  notification.expiry = Math.floor(Date.now() / 1000) + 3600; // Expires in 1 hour.
  notification.badge = 3;
  notification.sound = "ping.aiff";
  notification.alert = "Alert";
  notification.payload = {'messageFrom': 'Tire Pressure Monitor System'};
  notification.topic = 'Warning - Low Tire Pressure Detected';

  // Send the notification
  const result = await provider.send(notification, 'device_token');

  console.log(result);

  return result;
};
