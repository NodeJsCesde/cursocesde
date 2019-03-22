let express = require('express');
// importo el controlador project
let ProjectController = require('../controllers/ProjectControllers');
// metodo router de express
let router = express.Router();
// se crea una ruta por get ('ruta a crear ' , 'metodo de controlador')
router.get('/home' , ProjectController.home);
// se crea una nueva ruta 
router.post('/test' , ProjectController.test);
// se crea una nueva ruta inicio
router.post('/inicio' , ProjectController.test);
router.post('/saveproject' , ProjectController.saveProject);
module.exports = router;