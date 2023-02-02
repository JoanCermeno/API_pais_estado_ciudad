const express = require('express');
const router = express.Router();
const Ciudad = require('../models/Ciudad');

router.get('/', async (req, res) => {
	const Query = Ciudad.query();
	const {	estado_id, pais_id , ciudad_id } = req.query;
	if(ciudad_id){
		
		const ciudad = await Query.findById(ciudad_id).join('regions', 'cities.id', 'regions.id')
      	.select('cities.id as id_ciudad' , 'latitude' ,'longitude','regions.name as estado_name',
      		'cities.name as ciudad_name')

		console.log("se solicito una sola ciudad")
		return res.send(ciudad);
	}

	if (!estado_id || !pais_id) {
		res.send({
			message: "Bad_Reques",
			message_reference: "bad request"
		});
	}

	const cities = await Query.where('country_id', pais_id)
		.where('region_id', estado_id);

	if (!cities) {
		res.send("error!:" + cities)
	}
	console.log(cities.length);
	res.send(cities);

})



module.exports = router;