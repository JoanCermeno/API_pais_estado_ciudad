const express = require("express");
const router = express.Router();
const Pais = require("../models/Pais");
const isString = require("../../lib/isString");

router.get("/:idPais", async (req, res) => {
  if (req.secure) {
    req.protocol = "https";
  }

  const { idPais } = req.params;

  //consulta a la base de datos
  const Query = Pais.query();

  if (idPais) {
    const parsedId = parseInt(idPais, 10); // Parsear el ID a un número entero
    if (isNaN(parsedId) || parsedId <= 0 || parsedId > 1000) {
      //validando id
      return res.status(400).send({
        error: true,
        mensaje: `El parámetro "id" debe ser un número entero y no mayor a 1000.`,
      });
    }
    Query.where("id", parsedId);
  }

  try {
    const allPaises = await Query;
    return res.send(allPaises);
  } catch (e) {
    return res.status(500).send({ error: e.message });
  }
});

router.get("/", async (req, res) => {
  //recibiendo parámetros de búsqueda
  const { nombre } = req.query;
  console.log("Entre en juego");
  //consulta a la base de datos
  try {
    if (nombre == "undefined") {
      return res
        .status(400)
        .send({ error: 'El parámetro "nombre" no puede tener undefined' });
    }
    if (typeof nombre != "undefined" && isString(nombre)) {
      const paisNamed = await Pais.query().where("name", "LIKE", `%${nombre}%`);
      return res.send(paisNamed);
    }
    const paises = await Pais.query();
    return res.send(paises);
  } catch (error) {
    console.log(error);
    res.send({ mensaje: "Ocurrio un error al buscar el pais", error: true });
  }
});
module.exports = router;
