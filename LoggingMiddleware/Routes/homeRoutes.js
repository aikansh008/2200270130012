//homeRoutes.js
const express = require('express');
const router = express.Router();
const { home } = require('../controllers/homecontroller');

router.get("/", (req, res) => {
    res.send("Welcome to the server!");
});

router.post("/log", home); 

module.exports = router;