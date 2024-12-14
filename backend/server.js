const express = require('express');
const app = express();
const dbConnection = require('./config/db.js');
const router = require('./routes/newsRoute.js');
const addNews = require('./controller/newsController.js');

dbConnection();

app.use(router)
app.use("/", addNews)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Successfully connected, ${PORT}`);
})