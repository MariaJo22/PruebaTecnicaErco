const express = require("express")
const proyectosSchema = require("../models/proyectos")

const router = express.Router();

//crear 
router.post("/proyectos",(req,res) => {
    const proyectos=proyectosSchema(req.body);
    proyectos.save.then(()=>res.json(data)).catch((error)=> res.json({message: error}));
})

//leer 
router.get("/proyectos",(req,res) => {
    proyectosSchema
    .find()
    .then(()=>res.json(data))
    .catch((error)=> res.json({message: error}));
})
//actualizar
router.put("/proyectos/:id",(req,res) => {
    const{system_id} = req.params;
    const{system_name,installed_power,current_generation,total_generation} = req.body;
    proyectosSchema
    .updateOne({_id:system_id},{$set:{system_name,installed_power,current_generation,total_generation}})
    .then(()=>res.json(data))
    .catch((error)=> res.json({message: error}));
})

//eliminar
router.delete("/proyectos/:id",(req,res) => {
    const{system_id} = req.params;
    proyectosSchema
    .remove({_id:system_id})
    .then(()=>res.json(data))
    .catch((error)=> res.json({message: error}));
})

module.exports = router;