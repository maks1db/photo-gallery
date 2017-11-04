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
    info: String,
    create: {
        type: Date,
        default: new Date()
    }
},{versionKey: false});

module.exports = mongoose.model('user', user);