//aqui estamos creando las instancias de requerimientos a la carpeta resources

const express = require('express');
require('./src/db');
const ClienteRoutes = require('./src/routes/clienteRoutes');
const EtapaRoutes = require('./src/routes/etapaRoutes');
const ProyectoRoutes = require('./src/routes/proyectoRoutes');
const TipoProyectoRoutes = require('./src/routes/tipoProyectoRoutes');



const app = express();

app.use(express.json());

//llamamos la funcion de escucha e imprimos el puerto de la app
async function aplicacion() {
    await app.listen(4323);
    console.log("Mi puerto es el 4323");
}

app.get('/', (req, res) => {
    res.send("Conectado en la Web");
})
// hacemos el uso del app.use
app.use('/cliente', ClienteRoutes);
app.use('/etapa', EtapaRoutes);
app.use('/proyecto', ProyectoRoutes);
app.use('/tipoProyecto', TipoProyectoRoutes);


aplicacion();