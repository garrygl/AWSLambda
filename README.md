## AWSLambda - Testing Lambda Functions 


# Abstract: 
The goal of this portion of the project is to learn node.js serverless functions and associated SNS triggers. This will be accomplished by integrating an IoT tire pressure monitoring system (TPMS). A push notificataion with message body "Warning - Low Tire Pressure" is sent via SNS triggers to the following platforms:

- SMS Carrier 
TirePressure_ SMS_Push.mjs
- Firebase Cloud Messaging (FCM)
TirePressure_ FCM_Push.mjs
- Apple Push Notification Service (APNS)
TirePressure_ APNS_Push.mjs
- Amazon Device Messaging (ADM)
TirePressure_ ADM_Push.mjs

# Assumptions: 
A TPMS infrastructure is available on the device, and communications are integrated with an IoT monitoring system. 



