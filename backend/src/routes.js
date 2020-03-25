const express = require('express');

const routes = express.Router();

routes.get('/', (req,res)=>{
    return res.json({
        evento:'teste',
        pessoa:'tms',
    })
});

module.exports = routes;