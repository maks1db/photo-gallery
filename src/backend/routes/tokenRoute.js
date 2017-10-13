import express from 'express';
import tokenController from '../controllers/tokenController';

const router = express.Router();

/**
 * tokens
 */
router.use('/token/:id', tokenController.get);

module.exports = router;