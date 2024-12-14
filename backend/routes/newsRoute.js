const express = require("express");
const router = express.Router();
const addNews = require('../controller/newsController.js')

router.post("/", addNews)

module.exports = router;