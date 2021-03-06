const fs = require('fs');
const path = require('path');
const sizeOf = require('image-size');
const resizeImg = require('resize-img');
const userModel = require('./user');

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const userPhoto = new Schema({
    picture: String,
    path: String,
    smallPicture: String,
    title: String,
    description: String,
    year: Number,
    info: String,
    category: String,
    userId: String,
    selected: Boolean,
    create: { type: Date, default: new Date()},
    user: {
        name: String,
        age: Number
    }
},{versionKey: false});

/**
 * Init hook
 */
userPhoto.post('init', (doc, next) => {

    userModel.findById(doc.userId)
        .then(x => {
            doc.user = x.toJSON();
            doc.path = doc.picture;
            doc.picture = doc.picture.replace('public', '');
            doc.smallPicture = doc.smallPicture.replace('public', '');
            next();
        });
    
});

userPhoto.pre('save', function(next) {

    const p = path.join(__dirname, '../../../', this.picture);
    const dimension = sizeOf(p);
    const newFile = `${this.picture.split('.')[0]}-small.${dimension.type}`;

    let res = ~~(dimension.width/1024);
    if (res < 1) res = 1;

    res = Math.max(res, 3);

    resizeImg(fs.readFileSync(p), 
        {
            width: ~~(dimension.width/res), 
            height: ~~(dimension.height/res)
        })
        .then(buf => {
            fs.writeFileSync(newFile, buf);
            this.smallPicture = newFile;
            next();
        });  
});

/**
 * Remove hook
 */
userPhoto.post('remove',(doc, next) => {
    const p = path.join(__dirname, '../../../public/', doc.picture);
    const sp = path.join(__dirname, '../../../public/', doc.smallPicture);
    if (fs.existsSync(p)) {
        fs.unlinkSync(p);
    }

    if (fs.existsSync(sp)) {
        fs.unlinkSync(sp);
    }
    next();
});
module.exports = mongoose.model('user-photo', userPhoto);