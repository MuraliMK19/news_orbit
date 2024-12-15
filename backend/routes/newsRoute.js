const express = require("express");
const router = express.Router();
const { addNews, getNews, getoneNews } = require('../controller/newsController.js')

router.post("/add", addNews)
router.get("/get", getNews)
router.get("/get/:id", getoneNews)


module.exports = router;