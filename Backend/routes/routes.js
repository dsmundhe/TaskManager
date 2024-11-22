const express = require('express');
const route = express.Router();
const { handleSignup, handleLogin } = require('../controllers/userControllers');

route.post('/signup', handleSignup);
route.post('/login', handleLogin);

module.exports = route;