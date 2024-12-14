const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        const conn = await (mongoose.connect = process.env.MONGO_URI)
        console.log("Database Connected")
    }
    catch (err) {
        console.err("Database not Connected")
    }
}
module.exports = dbConnection; 