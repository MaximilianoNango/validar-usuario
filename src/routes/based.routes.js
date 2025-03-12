import { Router } from 'express';
import { getBased } from '../controllers/basedcontroller.js';

const router = Router();
router.get('/based', getBased); // Ruta para obtener los datos

export default router; // Exporta el router como un módulo ES