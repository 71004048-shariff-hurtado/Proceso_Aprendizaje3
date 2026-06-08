const Curso = require('../models/Curso');

exports.createCurso = async (req, res) => {
    
    try {
        const nuevo = await Curso.create(req.body);
        res.status(201).json(nuevo);
    } catch (error){
        res.status(400).json({
            error: error.message
        });
    }
    
};

exports.listarCursos = async (req, res) => {

    try {
        const cursos = await Curso.find();
        res.json(cursos);
    } catch (error) {
        res.status(500).json({ 
            error: error.message 
        });
    }
}

exports.actualizarCurso = async (req, res) => {

    try {
        const actualizado = await Curso.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );
        res.json(actualizado);
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
}

exports.eliminarCurso = async (req, res) => {

    try {Curso
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: "Curso eliminado" });
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
}
