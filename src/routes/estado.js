const express = require('express');
const router = express.Router();
const Estado = require('../models/Estado');

router.get('/', async (req,res) => {
	const Query = Estado.query();
	const {pais_id} = req.query;
	if(!pais_id){
		res.send({message:"Bad_Reques" , message_reference : "bad request"}).status(400);
	}

	const regions = await Query.where('country_id',pais_id);

	let parseRegion = regions.map((region) => {
		if(region.name != ''){
			return region
		}else{
			region.name = "the name is unknown"
			return region
			console.log("Name region  empty");
		}
	})
	
	res.send(parseRegion);
})


module.exports = router;