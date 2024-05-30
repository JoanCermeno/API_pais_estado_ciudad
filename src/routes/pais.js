const express = require("express");
const router = express.Router();
const Pais = require("../models/Pais");
const isString = require("../../lib/isString");

router.get("/", async (req, res) => {
  if (req.secure) {
    req.protocol = "https";
  }
  //recibiendo parámetros de búsqueda
  const { nombre, id } = req.query;
  const Query = Pais.query();

  if (id) {
    const parsedId = parseInt(id, 10); // Parsear el ID a un número entero
    if (isNaN(parsedId) || parsedId <= 0 || parsedId > 1000) {
      return res
        .status(400)
        .send({
          error:
            'El parámetro "id" debe ser un número entero y no mayor a 1000.',
        });
    }
    Query.where("id", parsedId);
  } else {
    if (nombre == "undefined") {
      return res
        .status(400)
        .send({ error: 'El parámetro "nombre" no puede tener undefined' });
    }
    if (typeof nombre != "undefined" && isString(nombre)) {
      Query.where("name", "LIKE", `%${nombre}%`);
    }
  }

  try {
    const allPaises = await Query;
    return res.send(allPaises);
  } catch (e) {
    return res.status(500).send({ error: e.message });
  }
});

module.exports = router;
