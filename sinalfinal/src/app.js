const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');
const { port } = require('./src/config/env');

const app = express();

// Habilita JSON no corpo das requisições
app.use(express.json());

// Habilita CORS
app.use(cors({
  origin: '*', // Permite requisições de qualquer origem
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Define as rotas com o prefixo /api
app.use('/api', routes);

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
