import photoModel from '../models/userPhoto';
import userModel from '../models/user';
const ObjectID = require('mongodb').ObjectID;
import fs from 'fs';
import path from 'path';
import archiver from 'archiver';
import zip from 'express-zip';

/**
 * Delete photo user and user obj
 */
module.exports.deleteUser = (req, res) => {
    photoModel.remove({userId: req.params.id})
        .then(() => userModel.remove({_id: ObjectID(req.params.id)}))
        .then(() => res.json({result: 'ok'})); 
};

module.exports.userPhoto = (req,res) => {
    const id = req.params.id;
    
    photoModel.find({userId: id})
        .then(x => {

            res.set('Content-Type', 'application/zip');
            res.set('Content-Disposition', 'attachment; filename=photo.zip');

            // const zip = archiver('zip');
            // zip.pipe(res);

            // zip.on('error', function(err) {
            //     res.status(500).send({error: err.message});
            // });
            // //on stream closed we can end the request
            // res.on('close', function() {
            //     console.log('Archive wrote %d bytes', zip.pointer());
            //     return res.status(200).send('OK').end();
            // });
        
            // let i = 0;
            // x.forEach(f => {
            //     i++;
            //     zip.append(fs.createReadStream(path.join(__dirname, '../../../', f.path)),
            //         {name: `${i}.jpg`});
            // });
            // zip.finalize();
            let arr = [];
            let i = 0;
            x.forEach(f => {
                i++;
                arr.push({
                    path: path.join(__dirname, '../../../', f.path),
                    name: `${i}.jpg`
                });
            });
            res.zip(arr);
        });

};