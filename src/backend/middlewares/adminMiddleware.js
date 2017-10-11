import tokenModel from '../models/token';

module.exports = (req, res, next) => {

    if (!req.headers.authorization) {
        res.status(401).json({ error: 'Not authorized' });
        return;
    }

    tokenModel.findById(req.headers.authorization)
        .then(obj => {
            if (obj.expired.valueOf() < new Date().valueOf()) {
                res.status(401).json({ error: 'Not authorized' });
            }
            else {
                next();
            }
        }, () => {
            //not found
            res.status(401).json({ error: 'Not authorized' });
        });
    
};