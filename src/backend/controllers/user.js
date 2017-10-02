import model from '../models/users';

module.exports.save = (req, res) => {
    const user = new model(req.body.user);
    user.save().then((doc) => {
        res.json({
            result: true,
            id: doc._id.toString()
        });
    });
};

module.exports.savePhoto = (req, res) => {
    var a = 1;
};