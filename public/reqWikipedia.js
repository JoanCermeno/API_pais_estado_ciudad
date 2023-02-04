let articuloDes = document.querySelector('#article_description');
const notFound = "Datos no encontrados..."
const callWikipedia = async (pais,estado,ciudad)=>{
	/**
	 * recibimos los 3 parametros a consultar en la wikipedia
	 * una peticion para cada una
	**/

	const getinfo = async (arg) => {
	
		const responseWipedia = await fetch(`https://es.wikipedia.org/w/api.php?action=query&list=search&srprop=snippet&format=json&origin=*&utf8=&srsearch=`+arg)
		const data = await responseWipedia.json();
		//extayendo el primer resultado de la wikipedia;
		const info = data.query.search[0];
		//console.log(infoPais); snippet pageid
		console.log(data);
		return info;
	}

	const infoPais = await getinfo(pais);
	const infoEstado = await getinfo(`${pais} estado ${estado}`);
	const infoCiudad = await getinfo(`${pais} estado ${estado} ciudad ${ciudad}`);
	//puintando el contenido del articulo 
	console.log(infoPais,infoEstado,infoCiudad)
	if(infoPais.snippet == undefined){
		infoPais.snippet = notFound;
	}else if(infoEstado == undefined){
		infoEstado = notFound;
	}else if(infoCiudad == undefined){
		infoCiudad.snippet = notFound;
	}

	articuloDes.innerHTML = `
	<h2>Pais: ${pais}</h2> <p>${infoPais.snippet} <a href="https://es.wikipedia.org/?curid=${infoPais.pageid}" target="_blank"> Seguir leyendo en wikipedia </a></p>
	<h2>Estado: ${estado}</h2><p>${infoEstado.snippet}<a href="https://es.wikipedia.org/?curid=${infoEstado.pageid} target="_blank""> Seguir leyendo en wikipedia</a></p>
	<h2>Ciudad: ${ciudad} </h2> <p>${infoCiudad.snippet}<a href="https://es.wikipedia.org/?curid=${infoCiudad.pageid} target="_blank""> Leer mas en wikipedia </a></p>`;

}
