const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    neighbourId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    item_name: {
        type: String,
    },
    message: {
        type: String,
    },
    reason: {
        type: String,
    },
    status: {
        type: String,
        default: "Pending",
    },
    flag: {
        type: Number,
    },
    return_date: {
        type: Date
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = Post = mongoose.model('post', PostSchema);
