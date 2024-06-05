const router = require("express").Router();

router.use("/", require("./src/routes"));
router.use("/api/pais", require("./src/routes/pais"));
router.use("/api/estado", require("./src/routes/estado"));
router.use("/api/ciudad", require("./src/routes/ciudad"));
router.use("/doc", require("./src/routes/doc"));

module.exports = router;
