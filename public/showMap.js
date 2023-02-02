class UIelement {
	constructor(elementHTML){
		this.elementHTML = document.querySelector(elementHTML);
	}
	show(){
		this.elementHTML.classList.remove('hiden');
	}
	hiden(){
		this.elementHTML.classList.add('hiden');
	}
	write(texto){
		this.elementHTML.innerHTML += texto;
	}
}

//escuchando el evento de lick
const btn = document.querySelector('#btnGetInfo');
const badgeLng = new UIelement('#badge-lng');
const badgeLat = new UIelement('#badge-lat');
const sectionMap = document.querySelector('#section-map');

btn.addEventListener( 'click', e =>{
	//primero desactivamos el boton hasta que se procese la primera solicitud!
	btn.disabled = true;
	//Tomamos todos los datos que estan en el select para poder hacer la consulta.
	const pais_id = select_pais.value;
	const estado_id = select_estado.value;
	const ciudad_id = select_ciudad.value;
	//mostrando el contenedor del mapa
	sectionMap.classList.remove('d-none');
	
	//make a request to server...
	fetch(`${URLactual}ciudad?ciudad_id=${ciudad_id}`)
		.then((response) => response.json())
		.then((ciudad) => {
			const theMap = new UIelement('#map');

			const lng = Number(ciudad.longitude);
			const lat = Number(ciudad.latitude);
			console.log(lng ,lat)
			/**
			*	Drawing the map
			**/
			let map = new maplibregl.Map({
				container: 'map',
				style: 'https://demotiles.maplibre.org/style.json', // stylesheet location
				center: [lng, lat], // starting position [lng, lat]
				zoom: 4 // starting zoom
			});	
			let marker = new maplibregl.Marker()
		  	.setLngLat([lng, lat])
		  	.addTo(map);
			theMap.show();
			badgeLng.write(lng);
			badgeLat.write(lat);

			btn.disabled = false;

			//show metada
			const linkGoogleMaps = document.createElement("a");
			linkGoogleMaps.href = `https://www.google.com/maps/place/${ciudad.name} ${}`;
			linkGoogleMaps.target = "_blank"
			linkGoogleMaps.innerHTML = "Ver En GoogleMaps";

			sectionMap.appendChild(linkGoogleMaps);
			
		})
		.catch((e) => console.log("Error" + e))
});


