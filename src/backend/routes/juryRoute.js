const express = require('express');
const photoModel = require('../models/userPhoto');
const crud = require('../crud');
const juryMiddleware = require('../middlewares/juryMiddleware');
const ratingController = require('../controllers/ratingController');

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