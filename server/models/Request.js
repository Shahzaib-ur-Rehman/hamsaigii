const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    acceptorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    item_name: {
        type: String,
    },
    quote: {
        type: String,
    },
    message: {
        type: String,
    },
    return_date: {
        type: Date,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = Request = mongoose.model('request', RequestSchema);
