const Proyecto = require('../models/proyectoModel');

// Listamos todos los proyectos
exports.listarProyectos = async (req, res) => {
  try {
    const proyectos = await Proyecto.find().populate('cliente tipoProyecto universidad etapa');
    res.json(proyectos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Creamos un nuevo proyecto
exports.crearProyecto = async (req, res) => {
  const proyecto = new Proyecto(req.body);
  try {
    const nuevoProyecto = await proyecto.save();
    res.status(201).json(nuevoProyecto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizamos un proyecto
exports.actualizarProyecto = async (req, res) => {
  try {
    await Proyecto.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: 'Proyecto actualizado correctamente.' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Eliminamos un proyecto por su ID
exports.eliminarProyecto  = async (req, res) => {
  try {
      const proyectoEliminado = await Proyecto.findByIdAndDelete(req.params.id);
      if(!proyectoEliminado) {
          return res.status(404).json({ message: 'Proyecto no encontrado' });
      }
      res.status(200).json({ message: 'Proyecto eliminado correctamente' });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};