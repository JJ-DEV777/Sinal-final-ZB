const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');
const { port } = require('./src/config/env');

const app = express();

// Habilita CORS antes das rotas
app.use(cors({
  origin: '*', // Permite requisições de qualquer origem (atenção: revise isso em produção)
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Habilita JSON no corpo das requisições
app.use(express.json());

// Define as rotas com o prefixo /api
app.use('/api', routes);

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

module.exports = app;
