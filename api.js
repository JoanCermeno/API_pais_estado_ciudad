const router = require('express').Router();

router.use('/info', require('./src/routes/info.js'));

module.exports = router;
