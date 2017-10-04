import modelUser from '../models/users';
import modelPhoto from '../models/userPhoto';

/**
 * Save user
 */
module.exports.save = (req, res) => {
    const user = new modelUser(req.body.user);
    user.save().then((doc) => {
        res.json({
            result: true,
            id: doc._id.toString()
        });
    });
};

/**
 * Save photo
 */
module.exports.savePhoto = (req, res) => {

    let obj = req.body;
    obj.picture = req.file.path;

    const photo = new modelPhoto(obj);
    photo.save().then((doc) => {
        res.json({
            result: true,
            id: doc._id.toString()
        });
    });
};