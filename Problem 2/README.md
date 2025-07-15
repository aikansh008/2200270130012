# HTTP URL SHORTNER MICROSERVICE API
A lightweight Express.js-based microservice to shorten long URLs. The shortened URLs automatically expire after 30 minutes (default), ensuring efficient and temporary redirection.

## Setup

1. Install dependencies:

   
   npm install
   

2. Create .env file:

   
   REACT_APP_API_URL=http://localhost:9000
   PORT=9000

   

3. Start server:
   
   node server
   

## Endpoints

- POST-   http://localhost:9001/shorturls- To shorten the URL. [expires in 30 min if not any validity provided ]
- GET-    http://localhost:9001/uniqueID- To get or redirection to the original URL.


   ## Screenshots

   ### POST Response
   Shortening of Instagram URL
   https://drive.google.com/file/d/17YL_c_cJq0s37Kuga94yYM4Nk4PQYUA4/view?usp=drive_link

   ### Correlation 
   Page Of Instagram
   https://drive.google.com/file/d/1vyFvm7rBpK9HqA9JwDxJ6w-o2hVCq1NN/view?usp=drive_link
