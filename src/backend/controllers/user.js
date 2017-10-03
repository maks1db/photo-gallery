import model from '../models/users';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: './files'
});
  
const upload = multer({ dest: 'uploads/' });

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
    upload(req, res, function (err) {
        if (err) {
            console.log(req.file);
            console.log(err);
            return;
        }
    
        res.send('Profile ok');
    });
};