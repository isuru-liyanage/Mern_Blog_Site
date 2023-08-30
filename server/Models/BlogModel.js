const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Your title is required"],
    },
    publisherName: {
        type: String,
        required: true,
    },
    publisherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    interestedFields: {
        type: [String],
        required: true,
    },
    content: {
        type: [String],
        required: true,
    },
    photoUrl: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('post', BlogSchema);
