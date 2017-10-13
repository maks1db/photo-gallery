import tokenModel from '../models/token';

module.exports.get = (req, res) => {
    const id = req.params.id;
    tokenModel
        .findById(id)
        .then((obj) => {  
            let token = '',
                role = '';
                
            if (obj.expired.valueOf() > new Date().valueOf()) {
                token = obj._id;
                role = obj.role;
            }
            res.json({
                token, role
            });
        },() => {
            //not found
            res.json({
                token: '',
                role: ''
            });
        });
};