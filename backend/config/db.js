const mongoose = require('mongoose');

// const dbConnection = async () => {
//     try {
//         const conn = await (mongoose.connect = process.env.MONGO_URI)
//         console.log("Database Connected")
//     }
//     catch (err) {
//         console.err("Database not Connected")
//     }
// }
// module.exports = dbConnection; 

const dbConnection = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Database Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(`Database not Connected: ${err.message}`);
        process.exit(1); // Exit the process if the database connection fails
    }
};
module.exports = dbConnection;
