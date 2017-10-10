import modelUser from '../models/user';
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

module.exports.checkInputs = (req,res) => {
    const inputs = req.query;

    Promise.all([
        modelUser.findOne({email: inputs.email}),
        modelUser.findOne({phone: inputs.phone})  
    ])
        .then( x => {
            res.json({
                email: x[0] !== null,
                phone: x[1] !== null
            });
        });
};