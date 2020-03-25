const express = require('express');

const OngController = require('./controllers/OngController');

const routes = express.Router();

routes.get('/ongs', OngController.list);

routes.post('/ongs', OngController.create);

module.exports = routes;