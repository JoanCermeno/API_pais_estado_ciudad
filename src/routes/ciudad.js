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

  //si no se manda pais_id entonces no podemos buscar esa ciudad
  if (!pais_id) {
    return res.send({
      error: true,
      mensaje: "El id de la ciudad es requerido",
    });
  }

  if (nombre && estado_id) {
    //Nos estan dando 2 id asi ejecutamos la consulta mas rapido
    try {
      const ciudades = await Query.where("country_id", "=", pais_id).where(
        "reginon_id",
        "=",
        estado_id
      );
      return res.send(ciudades);
    } catch (error) {
      console.log(
        "Acaba de ocurrir un fallo al  intentar pedir las ciudades pasando 2 parametros estadio id y pais id detalles -> " +
          error
      );
      return res.render("500");
    }
  } else {
    //Si solo viene nombre entonces buscamos una ciudad por nombre
    if (nombre) {
      const ciudadByName = await Query.where("country_id", pais_id).where(
        "name",
        "LIKE",
        `%${nombre}%`
      );
      console.log(ciudadByName);
      return res.send(ciudadByName);
    }

    //si nos dan un estado_id Mostramo las ciudades de ese estado
    if (estado_id) {
      const cities = await Query.where("country_id", pais_id).where(
        "region_id",
        estado_id
      );
      console.log(cities);
      return res.send(cities);
    }
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
  } else {
    res.render("404");
  }
});
module.exports = router;
