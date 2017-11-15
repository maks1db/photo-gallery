const express = require('express');
const mainController = require('../controllers/mainController');

const router = express.Router();

router.get('/dateEnd', mainController.dateEnd);

module.exports = router;