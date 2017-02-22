var mongoose = require('mongoose');
let Comments = require('../mongoose/comments.js');

var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: String,
  img: String,
  summary: String,
  text: String,
  comments: [Comments],
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now}
});

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;
