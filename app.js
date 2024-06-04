const express = require("express");
const ejs = require("ejs");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");

dotenv.config();
const PORT = process.env.PORT || 8080;
const DB_DEV_HOST = process.env.DB_DEV_HOST || "localhost";
//creando una instancia de express
const app = express();
//Configurando el router
app.use(
  cors({
    origin: "*",
  })
);
app.use(morgan("dev")); // Usa el formato
app.enable("trust proxy");
app.use("/", require("./api"));
app.set("views", path.join(__dirname, "src/views"));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

//muetra el error de pagina no encontrada
app.use(function (req, res, next) {
  // const host = req.protocol + '://' + req.get('host');

  res.render("404");
});

app.listen(PORT, () =>
  console.log(`app Runing in http://${DB_DEV_HOST}:${PORT}`)
);
