const express = require('express');
const cors = require('cors'); // Importa o middleware cors
const router = require('./routes/router'); // Importa o router

const app = express();
const PORT = 3333;

// Habilita o CORS para a origem específica (http://localhost:3000)
app.use(cors({ origin: 'http://localhost:3000' })); // Permite apenas a origem especificada

// Usa o router para gerenciar rotas
app.use(router);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
