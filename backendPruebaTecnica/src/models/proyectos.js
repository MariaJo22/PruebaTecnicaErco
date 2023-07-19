const mongoose = require("mongoose");

const proyectosSchema = mongoose.Schema({

    system_id:{
        type: Number,
        require: true
        
    },
    system_name:{
        type: String,
        require: true
        
    }
    ,
    installed_power:{
        type: Number,
        require: true

    }
    ,
    current_generation:{
        type: Number,
        require: true

    }
    ,
    total_generation:{
        type: Number,
        require: true

    }
    
    
})

module.exports = mongoose.model("proyectos", proyectosSchema)