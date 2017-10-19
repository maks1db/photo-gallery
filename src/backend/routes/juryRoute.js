import express from 'express';
import usersModel from '../models/user';
import photoModel from '../models/userPhoto';
import juryModel from '../models/userJury';
import crud from '../crud';
import juryMiddleware from '../middlewares/juryMiddleware';

const router = express.Router();

/**
 * users photo
 */
router.use('/photo', juryMiddleware, new crud(photoModel).init(['delete','post', 'patch']));

module.exports = router;