let mongoose = require('mongoose');
let Schema = mongoose.Schema;
// esquema de la bd
let ProjectShema = Schema({
    nombre: String,
    apellido: String,
    ciudad: String,
    edad: Number,
    fruta: String,
    animal: String,
});

module.exports = mongoose.model('Project' , ProjectShema);

