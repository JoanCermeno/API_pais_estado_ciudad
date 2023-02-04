const URLactual = window.location;
const select_pais = document.querySelector('#select_pais');
const select_estado = document.querySelector('#select_estado');
const select_ciudad = document.querySelector('#select_ciudad');
class BarLoad {
	constructor(idBarLoad){
		this.idBarLoad = document.querySelector(idBarLoad);
	}
	show(){
		this.idBarLoad.classList.remove('hiden');
	}
	hiden(){
		this.idBarLoad.classList.add('hiden');
	}
}
const barLoadEstado = new BarLoad('#bar-load-estado');
const barLoadCiudad = new BarLoad('#bar-load-ciudad');

select_pais.addEventListener('change', (e) => {
	console.log("buscando estados del pais " + select_pais.value)
	getEstadoOf(select_pais.value);
	barLoadEstado.show();
})

select_estado.addEventListener('change', (e) => {
	console.log("buscando cuidades del estado " + select_estado.value)
	getCitiesOf(select_estado.value, select_pais.value);
	barLoadCiudad.show();

})

const getCitiesOf = async (idEstado, idPais) => {
	/**
	* This function receives the id of the selected state or region And also idPais. To send to load the list of cities associated with that state or region
	* */
	fetch(`${URLactual}ciudad?estado_id=${idEstado}&pais_id=${idPais}`)
		.then((response) => response.json())
		.then((ciudades) => {
			let templateHTML = '';
			ciudades.forEach((ciudad) => {
				templateHTML += `<option value="${ciudad.id}">${ciudad.name}</option>`;
			})
			select_ciudad.innerHTML = '<option selected value="default">--Selecione una Ciudad--</option>';

			select_ciudad.innerHTML += templateHTML;
			barLoadCiudad.hiden();

			//console.log("ya cargue las ciudades")
		})
		.catch((e) => console.log("hubo un error al pedir las ciudades " + error))
	console.log("mande a cargar las ciudades")
}

const getEstadoOf = async (idPais) => {
	/**
	* Recibe como parametro el id del pais del cual se quiere buscar
	**/

	console.log("funcion get Estado activada...")

	fetch(`${URLactual}estado?pais_id=${idPais}`)
		.then((response) => response.json())
		.then((estados) => {
			let templateHTML = ''
			//representadno los resultados
			estados.forEach((estado) => {
				templateHTML += `<option value="${estado.id}">${estado.name}</option>`;
			})
			select_estado.innerHTML = '<option selected value="default">--Selecione un Estado--</option>';
			select_estado.innerHTML += templateHTML;
			//Listo eSTADOS CARGADOS CON EXITO
			barLoadEstado.hiden();
			
		})
		.catch((e) => console.log("Error al pedir estados" + e))
}



fetch(`${URLactual}pais`)
	.then(response => response.json() )
	.then(result => {
		let templateHTML = '';
		//pintando resultados
		result.forEach((pais) => {
			templateHTML += `<option value="${pais.id}">${pais.name}</option>`;
		})
		select_pais.innerHTML = '<option selected value="default">--Selecione un Pais--</option>';
		select_pais.innerHTML += templateHTML;

	})
	.catch(error => console.log('error:', error));