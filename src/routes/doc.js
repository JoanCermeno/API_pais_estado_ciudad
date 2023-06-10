const express = require('express');
const router = express.Router();
require('dotenv').config();

router.get('/',(req,res) => {
	if(req.secure){
		req.protocol = 'https';
	}
	const host = req.protocol + '://' + req.get('host');
	//show the page documentacion
	res.render('doc',{host});
	console.log("GET/ Documentacion");
})


module.exports = router;	