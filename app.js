'use strict'
// importa la biblioteca para manejo de peticiones htpp y aerchivos json
let express = require('express');
let bodyParser = require('body-parser');
// Ejecuta express
let app = express();

let projectRoutes = require('./Routes/ProjectRoutes');
app.use(express.json());

//rutas
app.use('/api', projectRoutes);
module.exports = app;