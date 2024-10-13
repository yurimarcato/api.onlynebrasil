const express = require('express');
const cors = require('cors'); // Importa o middleware cors
const router = require('./routes/router'); // Importa o router

const app = express();
const PORT = 3333;

app.use(cors()); 


app.use(router);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
