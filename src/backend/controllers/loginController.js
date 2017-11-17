const tokenModel = require('../models/token');
const userJuryModel = require('../models/userJury');
const config = require('../config');
const ObjectID = require('mongodb').ObjectID;

module.exports.login = (req, res) => {
    const { login, password } = req.body;
    const { admin, superadmin} = config.users;

    let role = '';
    //10 days
    const expired = new Date().valueOf() + 30 * 24 * 60 * 60 * 1000;

    if (admin.login === login && admin.password === password) {
        role = 'admin';
    }

    if (superadmin.login === login && superadmin.password === password) {
        role = 'superadmin';
    }

    if (!role) {
        //try check JURY
        userJuryModel.findOne({ login, password})
            .then(x => 
                new tokenModel({ role: 'jury', expired, userId: x.id })
                    .save()
                    .then(x => {
                        res.json({
                            token: x.id,
                            role: x.role
                        });
                    }))
            .catch(() => {
                res.json({
                    token: '',
                    role: ''
                });     
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

module.exports.logout = (req, res) => {
    const id = req.headers.authorization;   
    
    const result = () => res.json({result: 'ok'});
    tokenModel.remove({_id: ObjectID(id)}).then(result, result);       

};