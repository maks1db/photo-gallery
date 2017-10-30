import tokenModel from '../models/token';
import ratingModel from '../models/rating';
import photoModel from '../models/userPhoto';

module.exports.get = (req, res) => {

    const id = req.params.id;
    tokenModel.findById(req.headers.authorization).
        then(x => {
            let obj = {userId: x.userId};

            if (id !== undefined) {
                obj.photoId = id;
            }
            return ratingModel.find(obj);
        })
        .then(x => {
            if (id !== undefined) {
                res.json(x.length > 0 ? x[0] : {});   
            }
            else {
                res.json(x);
            }
        });
};

module.exports.update = (req, res) => {
    
    const id = req.params.id;
    tokenModel.findById(req.headers.authorization).
        then(x => {
            let obj = {userId: x.userId, photoId: id};
            let doc = {...obj};
            Object.keys(req.body).forEach(x => doc[x] = req.body[x]);
            
            return ratingModel.findOneAndUpdate(obj, doc)
                .then(x => {
                    if (x === null) {
                        new ratingModel(doc).save()
                            .then(() => res.json({update: 'ok'}));
                    }
                    else{
                        res.json({update: 'ok'}); 
                    }
                    
                });
        });
};

module.exports.empty = (req, res) => {
    let rating = [];
    tokenModel.findById(req.headers.authorization).
        then(x => {
            return ratingModel.find({userId: x.userId});      
        }).
        then(x => {
            rating = x;
            return photoModel.find({}).sort({create: -1});
        }).
        then(x => {
            res.json(x.filter(x => rating.find(r => r.value > 0 && r.photoId === x._id.toString()) === undefined));
        });
};