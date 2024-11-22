const jwt = require('jsonwebtoken');
require('dotenv').config();


const genToken = (id) => {
    if (!id) {
        throw new Error("User ID is required to generate a token");
    }
    return jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: "20d" })
}

module.exports = { genToken }