/*
	Para determinar si un dato enviado por el queryString es una cadena de texto
	o no lo es.
*/
module.exports = (data) => {

	if(data != undefined){
		let nan = Number(data)
		if(isNaN(nan)){
			//console.log("data es una cadena!");
			return true
		}else{
			//console.log("data no es una cadena!")
			return false
		}
	}
}