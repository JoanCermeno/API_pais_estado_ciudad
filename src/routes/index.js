const express = require('express');
const router = express.Router();
require('dotenv').config();

router.get('/',(req,res) => {
	//mandamos variables tales como pueto, name host para que desde el cliente
	//pueda hacer peticiones con javascript
	if(req.secure){
		req.protocol = 'https';
	}

	const host = req.protocol + '://' + req.get('host');
	//mandamos un objeto que nos permite mostrar la barra de busqueda.

	res.render('welcome',{
		host
	});
	console.log("GET / index");
})


module.exports = router;	