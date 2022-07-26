const express = require("express");

//Controllers
const psicologoController = require("../controllers/psicologoController");
const pacienteController = require("../controllers/pacienteController");
const atendimentoController = require("../controllers/atendimentoController");

const routes = express.Router();

//db
routes.get("/", (req, res)=>{
    console.log(req.query);
    res.send("Olá Mundo");
});

//Psicologo
routes.get("/psicologos", psicologoController.listarPsicologo);
routes.get("/psicologos/:id", psicologoController.listarIdPsicologo);
routes.post("/psicologos",  psicologoPostValidation,  psicologoController.cadastrarPsicologo);
routes.put("/psicologos/:id", psicologoController.atualizarPsicologo);
routes.delete("/psicologos/:id/deletar", psicologoController.deletarPsicologo);

//Paciente
routes.get("/pacientes", pacienteController.listarPaciente);
routes.get("/pacientes/:id", pacienteController.listarIdPaciente);
routes.post("/pacientes", pacienteController.cadastrarPaciente);
routes.put("/pacientes/:id", pacienteController.atualizarPaciente);
routes.delete("/pacientes/:id", pacienteController.deletarPaciente);

//Atendimentos
routes.get("/atendimentos", atendimentoController.listarAtendimento);
routes.get("/atendimentos/:id", atendimentoController.listarIdAtendimento);
routes.post("/atendimentos", auth, atendimentoController.cadastrarAtendimento);

module.exports = routes;