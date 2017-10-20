let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const token = new Schema({
    expired: Date,
    role: String,
    userId: String 
},{versionKey: false});

module.exports = mongoose.model('tokens', token);