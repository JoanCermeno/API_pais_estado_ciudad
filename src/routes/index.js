const express = require("express");
const router = express.Router();
const Pais = require("../models/Pais");
require("dotenv").config();

router.get("/", async (req, res) => {
  try {
    //mandamos variables tales como pueto, name host para que desde el cliente
    //pueda hacer peticiones con javascript
    if (req.secure) {
      req.protocol = "https";
    }

    const host = req.protocol + "://" + req.get("host");
    //mandamos un objeto que nos permite mostrar la barra de busqueda.
    const paises = await Pais.query();

    res.render("welcome", {
      host,
      paises,
    });
    console.log("GET / index");
  } catch (error) {
    console.log("Ocurrio un error al intenar pedir los paises : " + error);
    return res.render("500");
  }
});

module.exports = router;
