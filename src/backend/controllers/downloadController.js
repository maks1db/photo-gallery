const photoModel = require('../models/userPhoto');
const userModel = require('../models/user');
const ratingModel = require('../models/rating');
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');
const StringBuilder = require('string-builder');
const convert = require('helpers/convertStrToSave');
const categories = require('helpers/categories');

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

const keysPhoto = {
    description: 'описание',
    year: 'год',
    title: 'название',
    category: 'категория',
    info: 'где сделано'
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

module.exports.getPost = async (req, res) => {
    const sb = await distinctUserData('post');
    res.send(sb.toString());
};

module.exports.getAll = async (req, res) => {
    const users = await userModel.find({}).sort({name: 1});
    const photo = await photoModel.find({}).sort({title: 1});

    let names = [];
    
    users.forEach(x => {
        if (names.indexOf(x.name) < 0){
            names.push(x.name);
        }
    });

    const zip = archiver('zip', {
        zlib: { level: 9 }
    });
    zip.pipe(res);

    zip.on('error', function(err) {
        res.status(500).send({error: err.message});
    });
    
    names.forEach(n => {

        const name = convert(n);
        const data = users.filter(u => u.name === n).map(u => u.toJSON());
        const userPhoto = photo.filter(p => data.find(u => u._id.toString() === p.userId));
        
        //get user info
        const user = new StringBuilder();
        user.append(n).appendLine();

        Object.keys(keys).forEach(k => {
            const value = getVal(data, k)
            if (value !== undefined && value !== null) {
                user.appendLine(`\t${keys[k]}: ${value}`);
            }
        });

        //get photo info
        const photoInfo = new StringBuilder();
        userPhoto.forEach(x => {

            Object.keys(keysPhoto).forEach(k => {
                photoInfo.append(`${keysPhoto[k]}: ${x[k]}`).appendLine();  
            });
            photoInfo.appendLine();

            const fData = x.path.split('.');
            const type = fData.length > 1 ? fData[1] : 'jpg';
            zip.append(fs.createReadStream(path.join(__dirname, '../../../', x.path)),
                {name: `${name}/${convert(x.title)} (${convert(x.category)}).${type}`});
        });

        
        zip.append(user.toString(),
            {name: `${name}/info.txt`});
        zip.append(photoInfo.toString(),
            {name: `${name}/photo.txt`});
    });

    zip.finalize();
}

module.exports.getFirst = async (req, res) => {
    const count = req.params.count;  

    const photo = await photoModel.find({});
    const rating = await ratingModel.find({}).sort({'_id': -1});
    const dataCategories = [];
    
    let result = photo.map(x => {

        let doc = x.toJSON();
        let val = 0;
        let ratingInfo = [];

        rating
            .filter(r => r.photoId === x._id.toString())
            .forEach(r => {

                const index = ratingInfo.findIndex(x => x.userId === r.userId);
                //берем первое значение
                if (index < 0) {
                    ratingInfo.push({
                        userId: r.userId,
                        value: r.value,
                        comment: r.comment
                    });
                    val += r.value;
                }
                else {
                    if (r.comment) {
                        ratingInfo[index].comment = r.comment
                    }
                }
            });

        doc.rating = val;
        doc.ratingInfo = ratingInfo;
        return doc;
    }).sort((a,b) => b.rating - a.rating);

    const zip = archiver('zip', {
        zlib: { level: 9 }
    });
    zip.pipe(res);

    zip.on('error', function(err) {
        res.status(500).send({error: err.message});
    });

    categories.forEach(x => {

        let i = 0;
        result.filter( r => r.category === x).forEach( r => {
            i++;
            if (i > count) return;

            const fData = r.path.split('.');
            const type = fData.length > 1 ? fData[1] : 'jpg';
            zip.append(fs.createReadStream(path.join(__dirname, '../../../', r.path)),
                {name: `${convert(x)}/${r.rating || 0} - ${convert(r.user.name)} - ${convert(r.title)}.${type}`});
   
        });
    });

    zip.finalize();
}