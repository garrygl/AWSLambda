const request = require('request');

exports.handler = function(event, context, callback) {
  const serverKey = 'YOUR_FCM_SERVER_KEY';
  const message = {
    to: '/topics/all',
    data: {
      message: 'Warning - Low Tire Pressure Detected!'
    }
  };
  // Set up for the notification
  request({
    url: 'https://fcm.googleapis.com/fcm/send',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `key=${serverKey}`
    },
    body: JSON.stringify(message)
  }, function(error, response, body) {
    if (error) {
      console.error(error);
      callback(error);
    } else {
      console.log(response.statusCode, body);
      callback(null, response.statusCode, body);
    }
  });
};
