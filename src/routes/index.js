const express = require('express');
const router = express.Router();
require('dotenv').config();


router.get('/',(req,res) => {
	//mandamos variables tales como pueto, name host para que desde el cliente
	//pueda hacer peticiones con javascript
	res.render('welcome',{
		host: process.env.DB_DEV_HOST,
      	port: process.env.PORT,
	});
})


module.exports = router;	