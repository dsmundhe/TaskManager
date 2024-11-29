const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    notes: [
        {
            title: { type: String },
            content: { type: String },
            isPin: { type: Boolean }
        }
    ]

}, { timestamps: true })

//user model
const userModel = mongoose.model('user', userSchema);

module.exports = { userModel };