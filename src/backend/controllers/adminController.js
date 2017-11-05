import photoModel from '../models/userPhoto';
import userModel from '../models/user';
const ObjectID = require('mongodb').ObjectID;
import zip from 'express-zip';
import path from 'path';

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
    
    photoModel.find({userId: id})
        .then(x => {
            let arr = [];
            let i = 0;
            x.forEach(f => {
                i++;
                arr.push({
                    path: path.join(__dirname, '../../../', f.picture),
                    name: `${i}.jpg`
                });
            });
            res.zip(arr);
        });

};