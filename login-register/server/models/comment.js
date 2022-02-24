const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({

  description: {
    type: String,
    require: true
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'user'
  },
  post: {
    type: mongoose.Types.ObjectId,
    ref: 'post'
  }

}, { timestamps: true });

module.exports = mongoose.model("comment", commentSchema);