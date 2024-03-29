const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    message: {
        type: String,
    },
    reply: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = Feedback = mongoose.model('feedback', FeedbackSchema);
