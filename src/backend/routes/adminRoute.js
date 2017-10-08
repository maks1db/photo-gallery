import express from 'express';
import usersModel from '../models/users';
import photoModel from '../models/userPhoto';
import crud from '../crud';
import adminController from '../controllers/adminController';

const router = express.Router();

/**
 * users
 */
router.use('/users', new crud(usersModel).init(['delete']));
router.delete('/users/:id', adminController.deleteUser);

/**
 * users photo
 */
router.use('/photo', new crud(photoModel).init());


module.exports = router;