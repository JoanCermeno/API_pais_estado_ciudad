const { Model } = require("objection");
const Knex = require("knex");
const knexConfig = require("./knexFile.js");
const { DbErrors } = require("objection-db-errors");

const knex = Knex(knexConfig.development);
//iniciando la conexion con la db
Model.knex(knex);

class Modelo extends DbErrors(Model) {}

module.exports = {
  Modelo,
};
