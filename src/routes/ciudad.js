const express = require('express');
const router = express.Router();
const Ciudad = require('../models/Ciudad');

router.get('/', async (req, res) => {
	const Query = Ciudad.query();
	const {	estado_id, pais_id } = req.query;
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