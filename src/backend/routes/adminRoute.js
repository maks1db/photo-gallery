import express from 'express';
import usersModel from '../models/user';
import photoModel from '../models/userPhoto';
import crud from '../crud';
import adminController from '../controllers/adminController';
import adminMiddleware from '../middlewares/adminMiddleware';

const router = express.Router();

/**
 * users
 */
router.use('/users', adminMiddleware, new crud(usersModel).init(['delete']));
router.delete('/users/:id', adminMiddleware, adminController.deleteUser);

/**
 * users photo
 */
router.use('/photo', adminMiddleware, new crud(photoModel).init());

module.exports = router;