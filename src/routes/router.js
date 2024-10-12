const express = require('express');
const produtosController = require('../controllers/produtosController')
const router = express.Router();

router.get('/shoplink', produtosController.getAll);



module.exports = router;