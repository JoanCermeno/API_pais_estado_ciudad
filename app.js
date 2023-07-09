const express = require('express');
const ejs = require('ejs');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');

dotenv.config();
const PORT = process.env.PORT || 8080;
const DB_DEV_HOST = process.env.DB_DEV_HOST || 'localhost';
//creando una instancia de express
const app = express();
//Configurando el router
app.use(cors());
app.enable('trust proxy'); 
app.use('/', require('./api'));
app.set('views', path.join(__dirname, 'src/views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');


app.use( function(req, res, next) {

  // const host = req.protocol + '://' + req.get('host');
  
  res.render('404');
});

app.listen(PORT, () => console.log(`API Running in the ${PORT} and DB_DEV_HOST is ${DB_DEV_HOST} `));