const express = require('express');
const router = express.Router();

const {
    createCurso, listarCursos, actualizarCurso, eliminarCurso
} = require('../controllers/cursoController');

router.post('/users', createCurso);
router.get('/users', listarCursos);
router.put('/users/:id', actualizarCurso);
router.delete('/users/:id', eliminarCurso);

module.exports = router;
