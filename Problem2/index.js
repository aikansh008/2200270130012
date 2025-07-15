const express = require('express');
const app = express();
const PORT = 3000;

// Home GET API
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Home Page!');
});

app.listen(PORT,    () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});