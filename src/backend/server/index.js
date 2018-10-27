const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('../routes');
const db = require('../db');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use('/',express.static(path.join(__dirname, '../../../public/favicon.ico')));

if (process.env.NODE_ENV === 'dev') {
    app.use(
        '/uploads',
        express.static(path.join(__dirname, '../../../public/uploads'))
    );
    app.use(
        '/assets',
        express.static(path.join(__dirname, '../../../public/assets'))
    );
    app.use(function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header(
            'Access-Control-Allow-Methods',
            'GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH'
        );
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept, Authorization'
        );

        if (req.method === 'OPTIONS') {
            return res.send(200);
        } else {
            return next();
        }
    });
}

const port = 4000;

app.use('', routes);
app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../../../public/', 'index.html'));
});

db.connect();
app.listen(port, () => console.log('Server PHOTO-GALLERY RUNNING on ' + port));

module.exports = app;
