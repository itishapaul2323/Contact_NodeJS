const mongoose = require('mongoose')
const dotenv = require("dotenv").config();

const connectDB = async () => {
    try{
        mongoose.connect(process.env.CONNECTION_STRING);
        console.log('Database conneced');
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;