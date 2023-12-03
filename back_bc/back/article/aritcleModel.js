const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    _id: Number,
    article_title: String,
    article_body: String,
    article_keywords: {type:[String]},
    article_liked_count: {type: Number, default: 0},
    article_published: {type: Boolean, default: true},
    article_sugestion: {type: Boolean, default: false},
    article_featured: {type: Boolean, default: false},
    article_published_date: {type: Date, default: Date.now},
    article_author_id: Number

},
);

const Article = new mongoose.model('Article', articleSchema);

module.exports = Article;

