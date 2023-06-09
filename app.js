const express = require('express');
const ejs = require('ejs');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();
const PORT = process.env.PORT || 8080;
const DB_DEV_HOST = process.env.DB_DEV_HOST || 'localhost';
//creando una instancia de express
const app = express();
//Configurando el router
app.use('/', require('./api'));
app.set('views', path.join(__dirname, 'src/views'));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(function(req, res, next) {
  res.render('404');
});

app.listen(PORT, () => console.log("Escuchando... En https://"+DB_DEV_HOST+":" + PORT) );