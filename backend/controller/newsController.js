const news1 = require('../models/newsModel')

const addNews = async (req, res) => {
    console.log(req.body);
    const { heading, first_image, update_time, author_name, read_time, first_para, second_image, credits, second_para } = req.body;

    try {
        const news = new news1({
            heading, first_image, update_time, author_name, read_time, first_para, second_image, credits, second_para
        })
        await news.save()
        res.status(201).json({ message: "News posted successfully", news })
    }
    catch (error) {
        res.status(500).json({ message: "News posting unsuccessful", error })
    }
}
module.exports = addNews;