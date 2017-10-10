let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const user = new Schema({
    name: String,
    age: Number,
    phone: String,
    email: String,
    town: String,
    workPlace: String,
    post: String,
    experience: String,
    info: String
},{versionKey: false});

module.exports = mongoose.model('user', user);