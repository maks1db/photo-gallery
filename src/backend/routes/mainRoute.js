import express from 'express';
import mainController from '../controllers/mainController';

const router = express.Router();

router.get('/dateEnd', mainController.dateEnd);

module.exports = router;