const express = require('express');
const router = express.Router();
const Pais = require('../models/Pais')

router.get('/', async (req,res)=>{
	const Query = Pais.query();
	const allPaises = await Query;
	res.send(allPaises);
	
})


module.exports = router;