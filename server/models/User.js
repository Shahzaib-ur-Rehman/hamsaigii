const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: Number,
    },
    society: {
        type: String,
    },
    address: {
        type: String,
    },
    password: {
        type: String,
        minlength: 6,  // minimum length 6
    },
    role: {
        type: Number,
        default: 1,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = User = mongoose.model('user', UserSchema);
