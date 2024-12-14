const mongoose = require('mongoose')

const newsScheme = mongoose.Schema({
    heading: String,
    first_image: String,
    update_time: String,
    author_name: String,
    read_time: String,
    first_para: String,
    second_image: String,
    credits: String,
    second_para: String
})
const news = mongoose.model("news", newsScheme)
module.exports = news;