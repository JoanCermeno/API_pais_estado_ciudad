"use strict";
const {Modelo} = require('./Modelo');

class Pais extends Modelo {
  static get tableName() {
    return "countries";
  }
}

module.exports = Pais;
