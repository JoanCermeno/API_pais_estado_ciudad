const router = require('express').Router();

router.use('/', require('./src/routes'));
router.use('/pais', require('./src/routes/pais'));

module.exports = router;
