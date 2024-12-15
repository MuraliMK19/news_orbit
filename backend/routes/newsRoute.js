const express = require("express");
const router = express.Router();
const addNews = require('../controller/newsController.js')

router.post("/add", addNews)

module.exports = router;