const TipoProyecto = require('../models/tipoProyectoModel');

// Listamos todos los tipos del proyecto
exports.listarTiposProyecto = async (req, res) => {
    try {
        const tiposProyecto  = await TipoProyecto.find();
        res.json(tiposProyecto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Creamos un nuevo tipo de proyecto
exports.crearTipoProyecto = async (req, res) => {
  try {
    const nuevoTipoProyecto = await TipoProyecto.create(req.body);
    res.status(201).json(nuevoTipoProyecto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizamos un tipo de proyecto
exports.actualizarTipoProyecto = async (req, res) => {
    try {
      await TipoProyecto.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({ message: 'Tipo de proyecto actualizado correctamente.' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

// Eliminamos un tipo de proyecto por su ID
exports.eliminarTipoProyecto = async (req, res) => {
  try {
    const tipoProyectoEliminado = await TipoProyecto.findByIdAndDelete(req.params.id);
    if(!tipoProyectoEliminado) {
      return res.status(404).json({ message: 'Tipo de proyecto no encontrado'});
    };
    res.status(200).json({ message: 'Tipo de proyecto eliminado correctamente'});
  } catch (error) {
    res.status(500).json({ message: error.message})
  }
};