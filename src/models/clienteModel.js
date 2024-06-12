const mongoose = require('mongoose');

// Equema para el cliente
const ClienteSchema = new mongoose.Schema({
    nombre: {
        type: String,
    },
    email: {
        type: String,
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

// creamos y exportamos el modelo Cliente
module.exports = mongoose.model('Cliente', ClienteSchema);