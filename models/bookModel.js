const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Author: {
    type: String,
    required: true,
  },
  Evaluation: {
    type: Number,
    required: true,
  },
  Last_change: {
    type: String,
    required: true,
  },
});

const bookModel = mongoose.model("books", bookSchema);

module.exports = bookModel;
