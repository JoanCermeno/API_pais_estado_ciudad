//import the fun writeFile from fs/promises
const { appendFile,writeFile } = require('fs/promises');
const readLine = require('readline');
const fs = require('fs');

//leer lina por linea
const lineByLine = async () => {
	let lector = readLine.createInterface({
		input: fs.createReadStream('nuevos_datos.txt'),
	});
	let user = [];

	lector.on("line", (linea) => {
		user.push(linea.split(','));		
	});

	lector.on('close' , async () => {
		console.log(user)
	});
}

lineByLine();
