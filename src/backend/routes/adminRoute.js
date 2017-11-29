const express = require('express');
const usersModel = require('../models/user');
const photoModel = require('../models/userPhoto');
const juryModel = require('../models/userJury');
const crud = require('../crud');
const adminController = require('../controllers/adminController');
const adminMiddleware = require('../middlewares/adminMiddleware');
const downloadController = require('../controllers/downloadController');

const router = express.Router();

/**
 * users
 */
router.use('/users', adminMiddleware, new crud(usersModel).init(['delete']));
router.delete('/users/:id', adminMiddleware, adminController.deleteUser);
router.get('/userPhoto/:id', adminMiddleware, adminController.userPhoto);
router.patch('/selectPhoto/:id', adminMiddleware, adminController.selectPhoto);
/**
 * users photo
 */
router.use('/photo', adminMiddleware, new crud(photoModel).init());

/**
 * jury
 */
router.use('/jury', adminMiddleware, new crud(juryModel).init());

/**
 * Info
 */
router.get('/get/rating', adminMiddleware, adminController.ratingPhoto);

/**
 * download
 */
router.get('/download/users', adminMiddleware, downloadController.getUsers);
router.get('/download/autors', adminMiddleware, downloadController.getAutors);
router.get('/download/autorsAge', adminMiddleware, downloadController.getAutorsAge);
router.get('/download/town', adminMiddleware, downloadController.getTown);
router.get('/download/post', adminMiddleware, downloadController.getPost);
router.get('/download/all', adminMiddleware, downloadController.getAll);
router.get('/download/selected', adminMiddleware, downloadController.getSelected);
router.get('/download/first/:count', adminMiddleware, downloadController.getFirst);

module.exports = router;