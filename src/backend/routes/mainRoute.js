const express = require('express');
const mainController = require('../controllers/mainController');

const router = express.Router();

router.get('/dateEnd', mainController.dateEnd);
router.get('/dateVoteEnd', mainController.dateVoteEnd);

module.exports = router;