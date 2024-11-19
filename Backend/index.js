const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();
const PORT = 4000 || process.env.PORT;


app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})