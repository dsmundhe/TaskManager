// const url = 'mongodb://localhost:27017/taskmanager'
const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err.message);
        throw err; // Ensure the server exits on failure
    }
};

module.exports = { dbConnection };
