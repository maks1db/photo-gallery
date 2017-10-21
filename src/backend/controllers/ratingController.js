import tokenModel from '../models/token';
import ratingModel from '../models/rating';

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
            let doc = {...obj, value: req.body.value};
            
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