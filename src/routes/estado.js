const express = require("express");
const router = express.Router();
const Estado = require("../models/Estado");

router.get("/", async (req, res) => {
  const Query = Estado.query();
  const { paisId } = req.params;

  if (paisId) {
    const regionsOfCountry = await Query.where("country_id", paisId);
  } else {
    const AllEstados = await Query;
    res.send(AllEstados);
  }
});

module.exports = router;
