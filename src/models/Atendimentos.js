const Sequelize = require("sequelize");
const db = require("../database/db");
const Paciente = require("./Paciente");
const Psicologo = require("./Psicologo");

const Atendimentos = db.define("atendimentos", {
  psicologo_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Psicologo,
      key: "id",
    },
  },
  paciente_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Paciente,
      key: "id",
    },
  },
  data_atendimento: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  observacao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Atendimentos.sync();

module.exports = Atendimentos;