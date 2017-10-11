import express from 'express';

const router = express.Router();

router.use('/api/v1/', require('./mainRoute'));
router.use('/api/v1/user', require('./userRoute'));
router.use('/api/v1/admin', require('./adminRoute'));
router.use('/api/v1/auth', require('./loginRoute'));

module.exports = router;