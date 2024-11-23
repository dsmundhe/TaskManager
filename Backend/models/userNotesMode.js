const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    notes: [
        {
            title: { type: String, required: true },
            content: { type: String, required: true },
            id: {
                type: Number,
            }
        }
    ]
})