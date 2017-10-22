let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const rating = new Schema({
    userId: String,
    photoId: String,
    value: Number,
    comment: String 
},{versionKey: false});

module.exports = mongoose.model('rating', rating);