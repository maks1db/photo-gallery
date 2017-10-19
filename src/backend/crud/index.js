const ObjectID = require('mongodb').ObjectID;

class CRUD {

    constructor(model, options = {}){
        this.model = model;
        this.options = options;
    }

    init(disabled = []){
        var express = require('express'),
            router = express.Router();

        //создание
        if (disabled.indexOf('post') < 0) {
            router.post('/', (req, res) => this.post(req, res));
        }

        //выборка объекта/объектов
        if (disabled.indexOf('get') < 0) {
            router.get('/(:id)?', (req, res) => this.get(req, res));
        }

        //обновление объекта
        if (disabled.indexOf('delete') < 0) {
            router.patch('/:id', (req, res) => this.patch(req, res));
        }

        //удаление объекта
        if (disabled.indexOf('delete') < 0) {
            router.delete('/:id', (req, res) => this.delete(req, res));
        }
        
        return router;
    }

    post(req, res){

        const item = new this.model(req.body);
        if ('put' in this.options){
            req.body = this.options.put(req.body);
        }
        item.save().then((doc) => {
            res.json({
                result: true,
                id: doc._id.toString()
            });
        });
    }

    get(req, res){
    
        const id = req.params.id;

        if (id !== undefined){
            
            this.model.findById(id).then((obj) => {           
                res.json(obj.toJSON());
            });
        }
        else{

            const get =  req.query.query || '{}';
            const sort = req.query.sort || '{}';
            const limit = req.query.limit || 0;

            this.model.find(JSON.parse(get)).sort(JSON.parse(sort)).limit(parseInt(limit)).then((data) => {

                res.json(data.map(x => x.toJSON()));
                
            });
        }
    }

    delete(req, res){

        const id = req.params.id;   

        this.model.findOneAndRemove({_id: ObjectID(id)}, (err, doc) =>{
            doc.remove();
            res.json({
                result: true
            }); 
        });
    }

    patch(req, res){
        const id = ObjectID(req.params.id);

        this.model.update({_id: id}, req.body)
            .then(() => this.model.findById(id))
            .then((obj) => res.json(obj.toJSON()));
    }
}

module.exports = CRUD;