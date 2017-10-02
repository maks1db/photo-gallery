import express from 'express';

const router = express.Router();

router.use('/api/v1/', require('./main'));
router.use('/api/v1/user', require('./user'));

module.exports = router;