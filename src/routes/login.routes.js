import express from 'express';
import { register, login } from '../controllers/logincontroller.js'; // Importa las funciones

const router = express.Router();

// Ruta para el registro de usuarios
router.post('/register', register);

// Ruta para el inicio de sesión
router.post('/login', login);

export default router;
