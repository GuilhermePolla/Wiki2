const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    authorId : String,
    authorName: String,
    authorEmail: String,
    authorUser: String,
    authorPwd: String,
    authorLevel: {type: String, default: 'user'},
    authorStatus: { type :Boolean, default: true}

});

const Author = new mongoose.model('Author', authorSchema);

module.exports = Author;
