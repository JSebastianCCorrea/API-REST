const proyectoController = require('../controllers/proyectoController');
const express = require('express');

const router = express.Router();

router.get('/', proyectoController.listarProyectos);
router.post('/',proyectoController.crearProyecto);
router.put('/:id',proyectoController.actualizarProyecto);
router.delete('/:id', proyectoController.eliminarProyecto);

module.exports = router;