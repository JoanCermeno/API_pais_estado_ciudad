"use strict"
const {Modelo} = require('./Modelo');

class Ciudad extends Modelo {
	static get tableName() {
		return "cities"
	}
}


module.exports = Ciudad;