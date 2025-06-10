const express = require('express');
const cors = require('cors');
const routes = require("./src/routes");
const { port } = require("./src/config/env");

const app = express();

app.use(express.json());

app.use("/api", routes);

app.use(cors({
  origin: '*', // Permite apenas este frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

module.exports = app;
