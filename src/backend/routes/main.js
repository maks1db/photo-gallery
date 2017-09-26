import express from 'express';
import mainController from '../controllers/main';

const router = express.Router();

router.get('/dateEnd', mainController.dateEnd);

module.exports = router;