const mongoose = require('mongoose');

const PostSchema = new Schema({
  author: {
    type: String
  },
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  playingurl: {
    type: String
  },
  genre: {
    type: String
  },
  likes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ]
});

module.exports = Post = mongoose.model('post', PostSchema);
