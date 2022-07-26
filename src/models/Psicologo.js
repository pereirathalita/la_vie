const Sequelize = require("sequelize");
const database = require("../database/db");

const Psicologo = database.define("psicologo", {
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
  senha: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  apresentacao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Psicologo.sync();

module.exports = Psicologo;