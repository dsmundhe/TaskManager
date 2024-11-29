const express = require('express');
const route = express.Router();
const { handleSignup, handleLogin, getNotes, addNotes, editNote, deleteNote, pinNote, unpinNote } = require('../controllers/userControllers');
const { protect } = require('../auth/protect')

route.post('/signup', handleSignup);
route.post('/login', handleLogin);
route.get('/getnotes', protect, getNotes);
route.post('/addnotes', protect, addNotes);
route.post('/editnote/:noteID', protect, editNote);
route.delete('/deletenote/:noteID', protect, deleteNote);
route.put('/pinnote/:noteID', protect, pinNote);
route.put('/unpinnote/:noteID', protect, unpinNote);


module.exports = route;