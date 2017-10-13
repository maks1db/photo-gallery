const mongoose = require('mongoose');
const config = require('../config').mongodb;

mongoose.Promise = global.Promise;
 
const {user, password, host, port, database} = config;
let timeout;

const connectionString = (user === undefined ? 'mongodb://' : `${user}:${password}@`) + `${host}:${port}/${database}`;

const connect = () => {
    console.log('Connect to database...');
    mongoose.connect(connectionString);
};
const disconnect = () => {
    clearTimeout(timeout);
    mongoose.disconnect();
};

mongoose.connection.on('error', (error) => {

    //try connect again after 60 sec
    timeout = setTimeout(function() {
        disconnect();
        connect();   
    }, 10000);        
    
});

module.exports.connect = connect;

module.exports.state = () => {
    return mongoose.connection.readyState;
};

module.exports.disconect = () => {
    disconnect(); 
};