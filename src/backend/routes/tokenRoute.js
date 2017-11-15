const express = require('express');
const tokenController = require('../controllers/tokenController');

const router = express.Router();

/**
 * tokens
 */
router.use('/token/:id', tokenController.get);

module.exports = router;