import express from 'express';

const router = express.Router();

router.use('/api/v1/', require('./mainRoute'));
router.use('/api/v1/user', require('./userRoute'));

module.exports = router;