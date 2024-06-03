const express = require("express");
const router = express.Router();
const Estado = require("../models/Estado");

router.get("/:pais_id", async (req, res) => {
  const Query = Estado.query();
  const { pais_id } = req.params;
  const { nombre, id_estado } = req.query;
  console.log(req.query);

  //para buscar une stado en esepsifico
  if (id_estado) {
    const estadoEncontrado = await Query.findById(id_estado);
    return res.send(estadoEncontrado);
  }

  if (nombre) {
    const estadoEncontrado = await Query.where(
      "country_id",
      "=",
      `${pais_id}`
    ).where("name", "LIKE", `%${nombre}%`);
    return res.send(estadoEncontrado);
  }

  if (pais_id) {
    const regionsOfCountry = await Query.where("country_id", pais_id);
    return res.send(regionsOfCountry);
  } else {
    const AllEstados = await Query;
    res.send(AllEstados);
  }
});

module.exports = router;
