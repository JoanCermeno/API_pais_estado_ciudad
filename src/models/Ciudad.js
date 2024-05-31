"use strict"
const {Modelo} = require('./Modelo');
const {Estado} = require('./Estado')

class Ciudad extends Modelo {
	static get tableName() {
		return "cities"
	}
}


module.exports = Ciudad;