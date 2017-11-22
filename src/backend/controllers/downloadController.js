const photoModel = require('../models/userPhoto');
const userModel = require('../models/user');
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');
const StringBuilder = require('string-builder');

const year = (val) => {
    const s = String(val);
    const min = parseInt(s.substring(s.length-1, s.length)); 

    if (min === 0) return `${val} лет`;
    else if (min >1 && min < 5) return `${val} года`;
    else if (min >= 5) return `${val} лет`;

    return `${val} год`;
};

const getVal = (arr, key) => {
    const value = arr.find(d => d[key] !== '');
    return value ? value[key] : undefined;
};

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
        sb.appendLine(x);
        Object.keys(keys).forEach(k => {
            const value = data.find(d => d[k] !== '');
            if (value !== undefined) {
                sb.appendLine(`\t${keys[k]}: ${value[k]}`);
            }
        })
        sb.appendLine();
    });

    res.set('Content-Type', 'application/txt');
    
    // const zip = archiver('zip');
    // zip.pipe(res);

    // zip.on('error', function(err) {
    //     res.status(500).send({error: err.message});
    // });

    // zip.append(sb.toString(),
    //     {name: 'users.txt'});
    // zip.finalize();
    res.send(sb.toString());
};

module.exports.getAutors = async (req, res) => {
    const users = await userModel.find({}).sort({name: 1});
    let sb = new StringBuilder();
    let names = [];

    users.forEach(x => {
        if (names.indexOf(x.name) < 0){
            names.push(x.name);
        }
    });

    names.forEach(x => {
        const data = users.filter(u => u.name === x);
        const item = new StringBuilder(x + ', ');
        
        item.appendFormat('{0}, ', year(getVal(data, 'age') || 0));
        item.appendFormat('{0}. ', getVal(data, 'town'));
        item.appendFormat('{0}, ', getVal(data, 'post'));
        item.appendFormat('{0}. ', getVal(data, 'workPlace'));
        item.appendFormat('{0}. ', getVal(data, 'experience'));

        const info = getVal(data, 'info');
        if (info) {
            item.appendFormat('{0}. ', info);    
        }

        sb.appendLine(item.toString());
        sb.appendLine();
    });   

    res.set('Content-Type', 'application/txt');
    
    // const zip = archiver('zip');
    // zip.pipe(res);

    // zip.on('error', function(err) {
    //     res.status(500).send({error: err.message});
    // });

    // zip.append(sb.toString(),
    //     {name: 'users.txt'});
    // zip.finalize();
    res.send(sb.toString());
};

const distinctUserData = async (key) => {
    const result = await userModel.distinct(key);
    
    let sb = new StringBuilder('');
    result.sort().forEach(x => {
        const k = x.trim();

        if (k !== '') {
            sb.append(k);
            sb.appendLine();
        }
    });

    return sb;
}
module.exports.getTown = async (req, res) => {
    const sb = await distinctUserData('town');
    res.send(sb.toString());
};

module.exports.getWorkPlace = async (req, res) => {
    const sb = await distinctUserData('workPlace');
    res.send(sb.toString());
};