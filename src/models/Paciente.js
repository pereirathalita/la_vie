const Sequelize = require("sequelize");
const database = require("../database/db");

const Paciente = database.define("paciente", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  idade: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

Paciente.sync();

module.exports = Paciente;