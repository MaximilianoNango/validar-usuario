import express from 'express';
const router = express.Router();

// Simulación de una base de datos de usuarios
const users = [];

// Función para manejar el registro
export const register = (req, res) => {
    const { userName, userEmail, userPassword } = req.body;

    console.log('Datos recibidos:', { userName, userEmail, userPassword }); // Depuración

    if (!userName || !userEmail || !userPassword) {
        return res.status(400).send('Todos los campos son obligatorios');
    }

    const userExists = users.find(u => u.userEmail === userEmail);
    if (userExists) {
        return res.status(400).send('El usuario ya está registrado');
    }

    users.push({ userName, userEmail, userPassword });

    console.log('Usuario registrado:', { userName, userEmail, userPassword }); // Depuración
    res.redirect('/success.html');
};

// Función para manejar el inicio de sesión
export const login = (req, res) => {
    const { userEmail, userPassword } = req.body;

    console.log('Datos recibidos:', { userEmail, userPassword }); // Depuración

    if (!userEmail || !userPassword) {
        return res.status(400).send('Todos los campos son obligatorios');
    }

    const user = users.find(u => u.userEmail === userEmail && u.userPassword === userPassword);

    if (!user) {
        return res.status(401).send('Credenciales incorrectas');
    }

    console.log('Inicio de sesión exitoso para:', userEmail); // Depuración
    res.redirect('/success.html');
};
