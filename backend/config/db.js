const mongoose = require('mongoose');

const connectDb = () => {
    try {
        const MONGODB_URI = process.env.MONGODB_URI; // Ambil dari environment variables
        
        if (!MONGODB_URI) {
            throw new Error('MONGODB_URI is not defined');
        }
        
        console.log("Connecting to db...");
        mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Database Connection Successful!");
    } catch (error) {
        console.error("Database Connection failed!", error);
    }
};

module.exports = connectDb;
