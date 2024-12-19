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
    origin: 'http://localhost:80',
    credentials: true
}))
app.use(router)
app.use("/api/news", router);

app.get('/api/news/get', (req, res) => {
    res.json([]);
});


const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
    console.log(`Successfully connected, ${PORT}`);
})