const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads');
    },
    filename: (req, file, cb) => {
        let l = file.originalname.split('.');

        cb(null, `${Date.now().valueOf() + Math.round(1,500)}${l.length > 1 ? '.' + l[l.length-1] : '' }`);
    }
});
  
const upload = multer({ storage });

router.post('/item', userController.save);
router.post('/photo', upload.single('picture'), userController.savePhoto);
router.get('/checkInputs', userController.checkInputs);

module.exports = router;