let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const userJury = new Schema({
    name: String,
    login: String,
    password: String,
    about: String
},{versionKey: false});

userJury.post('save', (doc, next) => {
    console.log('save');
    next();
})

userJury.post('update', (doc, next) => {
    console.log('update');
    next();
})

module.exports = mongoose.model('user-jury', userJury);