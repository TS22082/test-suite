const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

const url = `https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=`;

router.get("/", (req, res) => {
  axios.get(url + process.env.WEATHER_KEY).then(result => {
    const data = result.data.main;
    res.send(data);
  });
});

module.exports = router;
