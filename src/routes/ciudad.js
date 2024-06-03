const express = require("express");
const router = express.Router();
const Ciudad = require("../models/Ciudad");

router.get("/:pais_id", async (req, res) => {
  const Query = Ciudad.query();
  const { estado_id, ciudad_id, nombre } = req.query;
  const { pais_id } = req.params;

  if (ciudad_id) {
    const ciudad = await Query.findById(ciudad_id);
    console.log("se solicito una sola ciudad");
    console.log(ciudad);
    return res.send(ciudad);
  }

  if (!pais_id) {
    res.send({
      message: "Faltan parametros en la busqueda, pais_id",
      error: true,
    });
  }
  //si no se manda pais_id entonces no podemos buscar esa ciudad
  if (!pais_id) {
    return res.send({
      error: true,
      mensaje: "El id de la ciudad es requerido",
    });
  }

  if (nombre) {
    const ciudadByName = await Query.where("country_id", pais_id).where(
      "name",
      "LIKE",
      `%${nombre}%`
    );
    console.log(ciudadByName);
    return res.send(ciudadByName);
  }

  //si estado id es verdadero buscamos las ciudades de ese estado
  if (estado_id) {
    const cities = await Query.where("country_id", pais_id).where(
      "region_id",
      estado_id
    );
    console.log(cities);
    return res.send(cities);
  }

  //Si solo nos dan el pais_id solo ese parametro mostramos las ciudades compelta de ese pais
  try {
    const allCitiesOfCountry = await Query.where("country_id", "=", pais_id);
    res.send(allCitiesOfCountry);
  } catch (error) {
    res.send({
      error: true,
      mensaje:
        "OCurrio un error al procesar los datos por favor intente mas tarde, si el problema persiste puede reportar este error",
    });
  }
});

router.get("/", async (req, res) => {
  const Query = Ciudad.query();
  const { ciudad_id } = req.query;

  if (ciudad_id) {
    const ciudad = await Query.findById(ciudad_id);
    console.log("se solicito una sola ciudad");
    console.log(ciudad);
    return res.send(ciudad);
  }
});

module.exports = router;
