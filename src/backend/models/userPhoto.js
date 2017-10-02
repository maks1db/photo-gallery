let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const userPhoto = new Schema({
    pic: String,
    title: String,
    description: String,
    year: Number,
    info: String,
    category: String,
    userId: String
},{versionKey: false});

module.exports = mongoose.model('userPhoto', userPhoto);