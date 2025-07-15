const axios = require('axios');

const registerApp = async () => {
  try {
    await axios.post(process.env.REGISTER_URL, {
      email: "aikanshtiwari007@gmail.com",
      name: "aikansh tiwari",
      rollNo: "2200270130012",
      accessCode: "uuMbyY",
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET
    });
    console.log("✅ App registered successfully");
  } catch (err) {
    console.error("❌ Registration failed:", err.message);
  }
};

module.exports = { registerApp };
