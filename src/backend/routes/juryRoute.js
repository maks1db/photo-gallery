import express from 'express';
import photoModel from '../models/userPhoto';
import crud from '../crud';
import juryMiddleware from '../middlewares/juryMiddleware';
import ratingController from '../controllers/ratingController';

const router = express.Router();

/**
 * users photo
 */
router.use('/photo', juryMiddleware, new crud(photoModel).init(['delete','post', 'patch']));

/**
 * photo rating 
 */
router.get('/rating', ratingController.get);
router.get('/rating/:id', ratingController.get);
router.patch('/rating/:id', ratingController.update);
router.get('/ratingEmpty', ratingController.empty);

module.exports = router;