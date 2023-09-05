const mongoose = require("mongoose");

const SupportSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Enter Your Title"],
    unique: false
  },
  content: {
    type: String,
    required: [true, "Enter your content"]
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  phoneno: {
    type: String,
    required: [false],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Support", SupportSchema);