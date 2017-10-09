import fs from 'fs';
import path from 'path';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const userPhoto = new Schema({
    picture: String,
    title: String,
    description: String,
    year: Number,
    info: String,
    category: String,
    userId: String
},{versionKey: false});

userPhoto.post('init', function(doc) {

    doc.picture = doc.picture.replace('public', '');
});

userPhoto.post('remove', function(doc) {
    const p = path.join(__dirname, '../../../', doc.picture);
    if (fs.existsSync(p)) {
        fs.unlinkSync(p);
    }
});
module.exports = mongoose.model('user-photo', userPhoto);