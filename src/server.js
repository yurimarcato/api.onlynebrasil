const express = require('express');
const cors = require('cors'); // Importa o middleware cors
const router = require('./routes/router'); // Importa o router

const app = express();
const PORT = process.env.PORT || 3000; // Define a porta para 3000 como padrão

app.use(cors());
app.use(router);

// Inicia o servidor
const server = app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${server.address().port}`);
});
