const mongoose = require('mongoose');

const SocietySchema = new mongoose.Schema({
    name: {
        type: String,
    },
    location: {
        type: String,
    },
    description: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = Society = mongoose.model('society', SocietySchema);
