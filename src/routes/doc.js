const express = require('express');
const router = express.Router();
require('dotenv').config();

router.get('/',(req,res) => {
	//show the page documentacion
	res.render('doc');
	console.log("GET/ Documentacion");
})


module.exports = router;	