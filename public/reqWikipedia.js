let articuloDes = document.querySelector('#article_description');
const barLoadMetada = document.querySelector('#bar-load-metada');
const notFound = "Datos no encontrados..."
const callWikipedia = async (pais,estado,ciudad)=>{
	/**
	 * recibimos los 3 parametros a consultar en la wikipedia
	 * una peticion para cada una
	**/

	const getinfo = async (arg) => {
		barLoadMetada.classList.remove('hiden');
		const responseWipedia = await fetch(`https://es.wikipedia.org/w/api.php?action=query&list=search&srprop=snippet&format=json&origin=*&utf8=&srsearch=`+arg)
		const data = await responseWipedia.json();
		//extayendo el primer resultado de la wikipedia;
		const info = data.query.search[0];
		//console.log(infoPais); snippet pageid
		console.log(data);
		barLoadMetada.classList.add('hiden');
		return info;
	}

	let infoPais = await getinfo(pais);
	let infoEstado = await getinfo(`${pais} estado ${estado}`);
	let infoCiudad = await getinfo(`${pais} estado ${estado} ciudad ${ciudad}`);
	//puintando el contenido del articulo 
	console.log(infoPais,infoEstado,infoCiudad)

	if(infoPais == undefined){
		infoPais = { 
			snippet: notFound,
			link : "Information UnKnow"
		}
	}else{
		infoPais.link = `<a class="text-secondary" href="https://es.wikipedia.org/?curid=${infoPais.pageid}" target="_blank"> Seguir leyendo en wikipedia </a>`
	}
	if(infoEstado == undefined){
		infoEstado = { 
			snippet: notFound ,
			link : "Information UnKnow"
		}
	}else{
		infoEstado.link = `<a class="text-secondary" href="https://es.wikipedia.org/?curid=${infoEstado.pageid}" target="_blank"> Seguir leyendo en wikipedia </a>`;
	}
	if(infoCiudad == undefined){
		infoCiudad = { snippet: notFound,
			link: "Information UnKnow"
		}
	}else{
		infoCiudad.link = `<a class="text-secondary" href="https://es.wikipedia.org/?curid=${infoCiudad.pageid}" target="_blank"> Seguir leyendo en wikipedia </a>`
	}


	articuloDes.innerHTML = `
	<h2>${pais}</h2><p>${infoPais.snippet} ${infoPais.link}</p>
	<h2>${estado}</h2><p>${infoEstado.snippet} ${infoEstado.link}</p>
	<h2>${ciudad} </h2><p>${infoCiudad.snippet} ${infoCiudad.link}</p>`;

}
