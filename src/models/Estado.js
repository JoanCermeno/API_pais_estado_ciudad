const { Modelo } = require("./Modelo");

class Estado extends Modelo {
  static get tableName() {
    return "regions";
  }
}

module.exports = Estado;
