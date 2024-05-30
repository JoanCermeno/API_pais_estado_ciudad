const router = require("express").Router();

router.use("/", require("./src/routes"));
router.use("/pais", require("./src/routes/pais"));
router.use("/estado", require("./src/routes/estado"));
router.use("/ciudad", require("./src/routes/ciudad"));

module.exports = router;
