import photoModel from '../models/userPhoto';
import userModel from '../models/users';
import fs from 'fs';
import path from 'path';
const ObjectID = require('mongodb').ObjectID;

/**
 * Delete photo user and user obj
 */
module.exports.deleteUser = (req, res) => {
    photoModel.find({userId: req.params.id})
        .then(x => {
            x.forEach( x => {
                const p = path.join(__dirname, '../../../', x.picture);
                if (fs.existsSync(p)) {
                    fs.unlinkSync(p);
                }
            });
            return photoModel.remove({userId: req.params.id});
        })
        .then(() => userModel.remove({_id: ObjectID(req.params.id)}))
        .then(() => res.json({result: 'ok'})); 
};