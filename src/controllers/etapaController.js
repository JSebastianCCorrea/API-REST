const Etapa = require('../models/etapaModel');

// Listamos todas las etapas
exports.listarEtapas = async (req, res) => {
  try {
    const etapas = await Etapa.find();
    res.json(etapas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Creamos una nueva etapa
exports.crearEtapa = async (req, res) => {
  const etapa = new Etapa(req.body);
  try {
    const nuevaEtapa = await etapa.save();
    res.status(201).json(nuevaEtapa);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizamos una etapa
exports.actualizarEtapa = async (req, res) => {
  try {
    await Etapa.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: 'Etapa actualizada correctamente.' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminamos etapa por su ID
exports.eliminarEtapa = async (req, res) => {
  try {
      const etapaEliminada = await Etapa.findByIdAndDelete(req.params.id);
      if(!etapaEliminada) {
          return res.status(404).json({ message: 'Etapa no encontrada' });
      }
      res.status(200).json({ message: 'Etapa eliminada correctamente' });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};