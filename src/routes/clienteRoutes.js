const clienteController = require('../controllers/clienteController');
const express = require('express');

const router = express.Router();

router.get('/', clienteController.listarClientes);
router.post('/',clienteController.crearCliente);
router.put('/:id',clienteController.actualizarCliente);
router.delete('/:id', clienteController.eliminarCliente);

module.exports = router;