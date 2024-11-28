const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/taskmanager'

// for dbConnection
const dbConnection = async () => {
    try {
        await mongoose.connect(url);
        console.log('MongoDB connected successfuly');
    } catch (error) {
        console.log(error);
    }
}

module.exports = { dbConnection }