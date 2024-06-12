const mongoose = require('mongoose');

// Esquema para el tipo de proyecto
const TipoProyectoSchema = new mongoose.Schema ({
    nombre: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
    fechaActualizacion: {   
        type: Date,
        default: Date.now
    }
});

// Creamos y exportamos el modelo TipoProyecto
module.exports = mongoose.model('TipoProyecto', TipoProyectoSchema);