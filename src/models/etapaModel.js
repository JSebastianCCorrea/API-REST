const mongoose = require('mongoose');

// Esquema para la etapa
const EtapaSchema = new mongoose.Schema({
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

// Creamos y exportamos el modelo Etapa
module.exports = mongoose.model('Etapa', EtapaSchema);