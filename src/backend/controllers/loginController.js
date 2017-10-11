import tokenModel from '../models/token';
import userJuryModel from '../models/userJury';
import config from '../config';

module.exports.login = (req, res) => {
    const { login, password } = req.body;
    const { admin, superadmin} = config.users;

    let role = '';
    //10 days
    const expired = new Date() + 10 * 24 * 60 * 60 * 1000;

    if (admin.login === login && admin.password === password) {
        role = 'admin';
    }

    if (superadmin.login === login && superadmin.password === password) {
        role = 'superadmin';
    }

    if (!role) {
        userJuryModel.findOne({ login, password})
            .then(x => {
                var a = 1;
            });    
    }
    else {

        new tokenModel({ role, expired })
            .save()
            .then(x => {
                res.json({
                    token: x.id,
                    role
                });
            });
    }
};