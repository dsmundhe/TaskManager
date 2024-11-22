const express = require('express');
const route = express.Router();
const { handleSignup, handleLogin, getNotes, addNotes } = require('../controllers/userControllers');
const { protect } = require('../auth/protect')

route.post('/signup', handleSignup);
route.post('/login', handleLogin);
route.get('/getnotes', protect, getNotes);
route.post('/addnotes', protect, addNotes);

module.exports = route;