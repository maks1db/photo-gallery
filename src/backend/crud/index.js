const ObjectID = require('mongodb').ObjectID;

class CRUD {

    constructor(model, options = {}){
        this.model = model;
        this.options = options;
    }

    init(){
        var express = require('express'),
            router = express.Router();

        //создание
        router.post('/', (req, res) => this.post(req, res));

        //выборка объекта/объектов
        router.get('/(:id)?', (req, res) => this.get(req, res));

        //обновление объекта
        router.patch('/:id', (req, res) => this.patch(req, res));

        //удаление объекта
        router.delete('/:id', (req, res) => this.delete(req, res));
        
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

            const get =  req.query.query;
            const sort = req.query.sort;
            const limit = req.query.limit || 0;

            this.model.find(JSON.parse(get)).sort(JSON.parse(sort)).limit(parseInt(limit)).then((data) => {

                res.json(data.toJSON());
                
            });
        }
    }

    delete(req, res){

        const id = req.params.id;   

        this.model.remove({_id: ObjectID(id)}).then((data) =>{
            res.json({
                result: data.result.ok === 1
            });       
        });

    }

    patch(req, res){
        const id = ObjectID(req.params.id);

        this.model.update({_id: id}, req.body).then((data) => {
            res.json({result: data.nModified === 1});
        });
    }
}

module.exports = CRUD;