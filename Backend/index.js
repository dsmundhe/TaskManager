const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000; // Use PORT from environment variables or fallback to 4000

// Import database connection function
const { dbConnection } = require('./db/dbConnection');

// Import routes
const userRoute = require('./routes/routes');

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded form data

// Connect to the database
dbConnection()
    .then(() => console.log('Database connected successfully'))
    .catch((err) => {
        console.error('Database connection error:', err);
        process.exit(1); // Exit if the database connection fails
    });

// Use routes
app.use('/user', userRoute); // Attach user routes

// Root route
app.get('/', (req, res) => {
    res.json({ msg: 'Hey, I am Home!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
