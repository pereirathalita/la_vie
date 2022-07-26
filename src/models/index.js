const Psicologo = require("./Psicologo");
const Paciente = require("./Paciente");
const Atendimentos = require("./Atendimentos");

Atendimentos.belongsTo(Psicologo, {
  foreignKey: "psicologo_id",
});

Psicologo.hasMany(Atendimentos, {
  foreignKey: "psicologo_id",
});

Atendimentos.belongsTo(Paciente, {
  foreignKey: "paciente_id",
});