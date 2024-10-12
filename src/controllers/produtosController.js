const { response } = require("express");
const produtosModel = require('../models/produtosModel');

const getAll = async (req, res)=> {
    const produtos = await produtosModel.getAll()

    return res.status(200).json(produtos)
};

module.exports ={
    getAll,
};