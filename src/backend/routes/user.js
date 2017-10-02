import express from 'express';
import userController from '../controllers/user';

const router = express.Router();

router.post('/item', userController.save);
router.post('/photo', userController.savePhoto);

module.exports = router;