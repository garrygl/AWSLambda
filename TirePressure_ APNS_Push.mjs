const AWS = require('aws-sdk');
const adm = require('amazon-device-messaging-node');

exports.handler = async (event) => {
  // Set up the ADM provider
  const provider = new adm.Provider({
    clientId: 'YOUR_CLIENT_ID',
    clientSecret: 'YOUR_CLIENT_SECRET',
    region: 'YOUR_REGION'
  });

  // Set up for the notification
  const notification = new adm.Notification();
  notification.expiresAfter = 3600; // Expires in 1 hour.
  notification.data.title = "Alert";
  notification.data.body = "Warning - Low Tire Pressure Detected";
  notification.data.custom = {'messageFrom': 'Tire Pressure Monitor System'};
  notification.consolidationKey = 'my_consolidation_key';

  // Send the notification
  const result = await provider.send(notification, 'DEVICE_TOKEN');

  console.log(result);

  return result;
};
