import photoModel from '../models/userPhoto';
import userModel from '../models/user';
const ObjectID = require('mongodb').ObjectID;
import fs from 'fs';
import path from 'path';
import archiver from 'archiver';
import converter from 'helpers/convertStrToSave.js';

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