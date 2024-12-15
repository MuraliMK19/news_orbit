const express = require('express');
const app = express();
const dbConnection = require('./config/db.js');
const router = require('./routes/newsRoute.js');
const addNews = require('./controller/newsController.js');
const cors = require('cors');
require('dotenv').config();


dbConnection();



app.use(express.json())


app.use(cors({
    origin: 'http://localhost:5000',
    credentials: true
}))
app.use(router)
app.use("/api/news", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Successfully connected, ${PORT}`);
})