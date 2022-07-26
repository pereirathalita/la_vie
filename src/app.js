const express = require("express");
const db = require("./database/db");
const routes = require("./routes");

const app = express();

db.hasConection();

// essa função precisa está antes das rotas, para conseguir rodar
app.use(express.json());

app.use(routes);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));