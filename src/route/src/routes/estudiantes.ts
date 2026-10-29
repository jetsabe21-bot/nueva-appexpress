 import { Router } from 'express';

const router = Router();

// las rutas van aquí
router.get('/estudiantes', (req, res) => {
    res.send('Lista de todos los estudiantes');
});

router.post('/estudiantes', (req, res) => {
    res.send('Estudiante creado exitosamente');
});
router.put('/estudiantes/:id', (req, res) => {
    res.send('id estudiante')
});
router.delete('/estudiantes/:id', (req, res) => {
    res.send('id eliminar')
});

export default router;