import photoModel from '../models/userPhoto';
import userModel from '../models/user';
const ObjectID = require('mongodb').ObjectID;

/**
 * Delete photo user and user obj
 */
module.exports.deleteUser = (req, res) => {
    photoModel.remove({userId: req.params.id})
        .then(() => userModel.remove({_id: ObjectID(req.params.id)}))
        .then(() => res.json({result: 'ok'})); 
};