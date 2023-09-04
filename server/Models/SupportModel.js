const mongoose = require("mongoose");

const SupportSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Enter Your Title"],
  },
  content: {
    type: String,
    required: [true, "Enter your content"],
    unique: true,
  },
  phoneNo: {
    type: String,
    required: [false],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Support", SupportSchema);