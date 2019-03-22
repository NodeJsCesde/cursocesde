'use strict'
// importar biblioteca para conectar con mongodb
let mongoose = require('mongoose');
let app = require('./app');
let port = 3700;
// promesa para conexion con mongodb

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/bdconexion')
    .then(() => {
        console.log("conexion a la base de datos extablecida con éxito");

        // creacion del servidor 
        app.listen(port, () => {
            console.log("servidor corriendo correctamente");
        });
    })
    .catch(err => console.log(err)
    );
console.log('prueba');  