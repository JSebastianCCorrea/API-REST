const mongoose = require('mongoose');

// Url de la conexión a la base de datos
const mongoURL = 'mongodb://admin:admin@mongodb:27017/miapp?authSource=admin';

// Configuramos la conexión a mongoDB
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

// Eventos de conexión
mongoose.connection.on('connected', () => {
    console.log('Conexión a MongoDB establecida.');
  });

mongoose.connection.on('error', (err) => {
    console.error('Error de conexión a MongoDB:', err);
  });
  
mongoose.connection.on('disconnected', () => {
    console.log('Desconectado de MongoDB.');
  });
  
// Exportamos la conexión para usarla en otros archivos
module.exports = mongoose.connection;