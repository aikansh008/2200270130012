# LOGGING MIDDLEWARE

This logging middleware captures all important events like errors, warnings, logs, and unhandled issues in the application and automatically sends them to a test server for monitoring and debugging.

## Setup

1. Install dependencies:

   
   npm install
   

2. Create .env file:

   
   REACT_APP_API_URL=http://localhost:9000
   PORT=9000

   

3. Start server:
   
   npm start
   

## Endpoints

- POST - http://localhost:9000/log [To get logID]
