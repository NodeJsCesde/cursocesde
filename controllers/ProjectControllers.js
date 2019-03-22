
// nos atraemos el modelo
let Project = require('../models/ProjectModels');
let controller = {
    home: function(req, res){
        return res.status(200).send({
            mensaje: "soy el home"
        });
    },
    test: (req, res)=>{
            res.status(200).send({
            mensaje: "soy el metodo test del controlador project"
        });
    },
    inicio: (req, res)=>{
            res.status(200).send({
            mensaje: "todo inicio bien"
        });
    },
    saveProject: (req, res)=>{
        let project = new Project();
        let params = req.body;
        project.nombre = params.nombre;
        project.apellido = params.apellido;
        project.ciudad = params.ciudad;
        project.edad = params.edad;
        project.fruta = params.fruta;
        project.animal = params.animal;
        project.save((err, projectStored)=>{
            if(err){
                return res.status(500)
                          .send({mensaje: "Error al guadar el documento"});          
            }
            if(!projectStored){
                return res.status(404).send({ mensaje: "No se ha podido guadar el proyecto"});
            }
            return res.status(200).send({
                project: projectStored,
                mensaje: "todo bien"
            });
        });

        res.status(200).send({
            datos: project,
            mensaje: "metodo save project"
        });
    }
    
}
module.exports = controller;