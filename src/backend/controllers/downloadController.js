const photoModel = require('../models/userPhoto');
const userModel = require('../models/user');
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');
const StringBuilder = require('string-builder');

module.exports.getUsers = async (req, res) => {
    const users = await userModel.find({}).sort({name: 1});
    let sb = new StringBuilder();
    let names = [];

    users.forEach(x => {
        if (names.indexOf(x.name) < 0){
            names.push(x.name);
        }
    });
    const keys = {
        age: 'возраст',
        phone: 'телефон',
        email: 'e-mail',
        town: 'город',
        workPlace: 'место работы/учебы',
        post: 'должность',
        experience: 'туристический опыт',
        info: 'доп. информация',
    };

    names.forEach(x => {
        const data = users.filter(u => u.name === x);
        sb.appendLine(x)
        Object.keys(keys).forEach(k => {
            const value = data.find(d => d[k] !== '');
            if (value !== undefined) {
                sb.appendLine(`\t${keys[k]}: ${value[k]}`);
            }
        })
        sb.appendLine();
    });

    res.set('Content-Type', 'application/zip');
    
    const zip = archiver('zip');
    zip.pipe(res);

    zip.on('error', function(err) {
        res.status(500).send({error: err.message});
    });

    zip.append(sb.toString(),
        {name: 'users.txt'});
    zip.finalize();
};