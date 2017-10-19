let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const userJury = new Schema({
    name: String,
    login: String,
    password: String,
    about: String
},{versionKey: false});

module.exports = mongoose.model('user-jury', userJury);