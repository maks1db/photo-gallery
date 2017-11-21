const photoModel = require('../models/userPhoto');
const userModel = require('../models/user');
const ratingModel = require('../models/rating');
const ObjectID = require('mongodb').ObjectID;
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');
const converter = require('helpers/convertStrToSave.js');

/**
 * Delete photo user and user obj
 */
module.exports.deleteUser = (req, res) => {
    photoModel.remove({userId: req.params.id})
        .then(() => userModel.remove({_id: ObjectID(req.params.id)}))
        .then(() => res.json({result: 'ok'})); 
};

module.exports.userPhoto = (req,res) => {
    const id = req.params.id;
    let user;
    
    userModel.findById(id)
        .then(x => {
            user = x.toJSON();
            return photoModel.find({userId: id});
        })
        .then(x => {

            res.set('Content-Type', 'application/zip');

            const zip = archiver('zip');
            zip.pipe(res);

            zip.on('error', function(err) {
                res.status(500).send({error: err.message});
            });

            x.forEach(f => {
                const fData = f.path.split('.');
                const type = fData.length > 1 ? fData[1] : 'jpg';
                zip.append(fs.createReadStream(path.join(__dirname, '../../../', f.path)),
                    {name: `${converter(f.title)}.${type}`});
            });
            zip.finalize();
        });

};

module.exports.ratingPhoto = async (req, res) => {

    let query = {};
    if (['all', 'empty'].indexOf(req.query.category) < 0) {
        query.category = req.query.category;
    }

    const photo = await photoModel.find(query);
    const rating = await ratingModel.find({});

    let result = photo.map(x => {

        let doc = x.toJSON();
        let val = 0;

        rating
            .filter(r => r.photoId === x._id.toString())
            .forEach(r => val += r.value);

        doc.rating = val;
        return doc;
    });

    if (req.query.category === 'empty') {
        result = result.filter(x => x.rating === 0);
    }

    res.json(result.sort((a,b) => b.rating - a.rating));
};