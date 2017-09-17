import express                      from 'express';                      
import bodyParser                   from 'body-parser';
import path                         from 'path';

const app = express();  

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/',express.static(path.join(__dirname, '../../../public/favicon.ico')));
app.use('/assets',express.static(path.join(__dirname, '../../../public/assets')));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method === 'OPTIONS') {
        return res.send(200);
    } else {
        return next();
    }
});

const port = 4000;

app.get('*',function(req,res){
    res.sendFile(path.resolve(__dirname, '../../../public/', 'index.html'));
});

app.listen(port, ()=> console.log('Server LESOBEG RUNNING on ' + port));

module.exports = app;