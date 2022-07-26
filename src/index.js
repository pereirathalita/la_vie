(async ()=>{
    const database = require("./database/db");
    const Psicologo = require("./models/Psicologo");
    const Paciente = require("./models/Paciente");
    await database.sync();
})();