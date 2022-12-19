const AWS = require('aws-sdk');
  // Set up for the notification
exports.handler = async (event) => {
  const sns = new AWS.SNS();
  const params = {
    Message: 'Warning - Low Tire Pressure Detected', 
    PhoneNumber: '+831566xxxx',
    Subject: 'Tire Pressure'
  };
  try {
    const result = await sns.publish(params).promise();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};