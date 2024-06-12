const etapaController = require('../controllers/etapaController');
const express = require('express');

const router = express.Router();

router.get('/', etapaController.listarEtapas);
router.post('/',etapaController.crearEtapa);
router.put('/:id',etapaController.actualizarEtapa);
router.delete('/:id', etapaController.eliminarEtapa);

module.exports = router;