const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    message: {
        type: String,
    },
    color: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = Notification = mongoose.model('notification', NotificationSchema);
