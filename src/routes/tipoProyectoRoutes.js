const tipoProyectoController = require('../controllers/tipoProyectoController');
const express = require('express');

const router = express.Router();

router.get('/', tipoProyectoController.listarTiposProyecto);
router.post('/',tipoProyectoController.crearTipoProyecto);
router.put('/:id',tipoProyectoController.actualizarTipoProyecto);
router.delete('/:id', tipoProyectoController.eliminarTipoProyecto);

module.exports = router;