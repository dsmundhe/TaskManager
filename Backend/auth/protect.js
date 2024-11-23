const { userModel } = require('../models/userModel');
const jwt = require('jsonwebtoken');


const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
        res.status(401).json({ msg: "Not authorized user , Provide token" });
        return;

    }

    try {
        const decodedToken = await jwt.verify(token, process.env.SECRET_KEY);
        req.user = await userModel.findById(decodedToken.id).select('-password');
        next();
    }
    catch (error) {
        res.status(401).json("Not authorized user!");
        return;
    }
}

module.exports = { protect }