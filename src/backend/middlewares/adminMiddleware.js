import tokenModel from '../models/token';

module.exports = (req, res, next) => {

    if (!req.headers.authorization) {
        res.status(401).json({ error: 'Not authorized' });
        return;
    }

    tokenModel.findById(req.headers.authorization)
        .then(x => {
            var a = 1;
        })
    next();
};