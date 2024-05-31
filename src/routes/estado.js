const express = require("express");
const router = express.Router();
const Estado = require("../models/Estado");

router.get("/:idPais", async (req, res) => {
  const Query = Estado.query();
  const { idPais } = req.params;
  const { nombre } = req.query;

  if (nombre) {
    const estadoEncontrado = await Query.where("name", "LIKE", `%${nombre}%`);
    return res.send(estadoEncontrado);
  }

  if (idPais) {
    const regionsOfCountry = await Query.where("country_id", idPais);
    return res.send(regionsOfCountry);
  } else {
    const AllEstados = await Query;
    res.send(AllEstados);
  }
});

module.exports = router;
