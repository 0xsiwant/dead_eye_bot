const mongoose = require('mongoose');
const { MONGODB_URI } = require('./index');

const connectDb = () => {
    try{
        console.log("Connecting to db...");
        mongoose.connect(MONGODB_URI);
        console.log("Database Connection Successful!");
    }catch(error){
        console.log("Database Connection failed!", error);
    }
};

module.exports = connectDb;