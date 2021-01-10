const mongoose = require("mongoose");

const PostingSchema = new mongoose.Schema({
  User: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Add a User"],
  },
  Title: {
    type: String,
    required: [true, "Add a title"],
  },
  Description: {
    type: String,
    required: [true, "Add a description"],
  },
  Value: {
    type: String,
    required: [true, "Add a value"],
  },
  Employee: {
    type: mongoose.Schema.Types.ObjectId,
  },
  Applicants: {
    type: [mongoose.Schema.Types.ObjectId],
  },
  Location: {
    type: String,
  },
});

module.exports = mongoose.model("Posting", PostingSchema);
