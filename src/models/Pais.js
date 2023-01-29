"use strict";
const {Modelo} = require('./Modelo');

class Pais extends Modelo {
  static get tableName() {
    return "countries";
  }
  //   /*Relationmapping*/
  // static get relationMappings(){

  //   return {
  //     pais:{
  //       relation: Countries.HasManyRelation,
  //       modelClass: countries,
  //       join: {
  //         from: 'countries_id',
  //         to: 'usuario.id_pais'
  //       }
  //     }
  //   }
  // }
}

module.exports = Pais;
