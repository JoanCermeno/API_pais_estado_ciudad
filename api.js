const router = require("express").Router();

router.use("/", require("./src/routes"));
router.use("/pais", require("./src/routes/pais"));
router.use("/pais", require("./src/routes/pais"));
router.use("/estados", require("./src/routes/estado"));
router.use("/ciudad", require("./src/routes/ciudad"));
router.use("/doc", require("./src/routes/doc"));


module.exports = router;
