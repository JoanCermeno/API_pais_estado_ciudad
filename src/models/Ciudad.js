"use strict"
const {Modelo} = require('./Modelo');
const {Estado} = require('./Estado')

class Ciudad extends Modelo {
	static get tableName() {
		return "cities"
	}
	// static get relationMappings(){

	//     return {
	//       estado:{
	//         relation: Estado.HasManyRelation,
	//         modelClass: estado,
	//         join: {
	//           from: 'regions.id',
	//           to: 'cities.id'
	//         }
	//       }
	//     }
	//   }
}


module.exports = Ciudad;