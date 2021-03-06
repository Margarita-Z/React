const mongoose = require('mongoose');


const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'user'
  },
  category: {
    type: mongoose.Types.ObjectId,
    ref: 'category'
  },
  comment: [{
    type: mongoose.Types.ObjectId,
    ref: 'comment'
  }],
  sentiments: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'sentiment'
    }
  ]

}, { timestamps: true });

module.exports = mongoose.model('post', postSchema)