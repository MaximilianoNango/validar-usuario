import { Router } from 'express';
import { getInsertar } from '../controllers/insertarcontroller.js';

const router = Router();

router.post('/insertar', getInsertar);
// router.get('/clinica/:id', getClinicas);

export default router;

// router.get('/clinica', (req, res) => {
//     res.send('clinica');
// });