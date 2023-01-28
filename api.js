const router = require('express').Router();

router.use('/', require('./src/routes'));

module.exports = router;
