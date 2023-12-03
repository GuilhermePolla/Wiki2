const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    _id : Number,
    authorName: String,
    authorEmail: String,
    authorUser: String,
    authorPwd: String,
    authorLevel: {type: String, default: 'user'},
    authorStatus: { type :Boolean, default: true},
    authorToken: {type: String, default: null}
    

}
);

const Author = new mongoose.model('Author', authorSchema);

module.exports = Author;

