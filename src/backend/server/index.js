import express from 'express';                      
import bodyParser from 'body-parser';
import path from 'path';
import routes from '../routes';
import db from '../db';

const app = express();  

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/',express.static(path.join(__dirname, '../../../public/favicon.ico')));
app.use('/assets',express.static(path.join(__dirname, '../../../public/assets')));

if (process.env.NODE_ENV === 'dev') {
    app.use(function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    
        if (req.method === 'OPTIONS') {
            return res.send(200);
        } else {
            return next();
        }
    });
}

const port = 4000;

app.use('', routes);
app.get('*',function(req,res){
    res.sendFile(path.resolve(__dirname, '../../../public/', 'index.html'));
});

db.connect();
app.listen(port, ()=> console.log('Server PHOTO-GALLERY RUNNING on ' + port));

module.exports = app;