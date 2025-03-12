import express from 'express'; // Framework para construir el servidor
import path from 'path'; // Para manejar rutas de archivos
import { PORT } from './config.js'; // Archivo de configuración para el puerto
import { insertarRoutes, basedRoutes } from './routes/index.js'; // Otras rutas personalizadas
import productosRoutes from './routes/products.routes.js'; // Rutas para productos
import registrosRoutes from './routes/registers.routes.js'; // Rutas para registros
import usersRoutes from './routes/users.routes.js'; // Rutas para usuarios
import loginRoutes from './routes/login.routes.js'; // Rutas específicas de login

import morgan from 'morgan'; // Middleware para loguear peticiones HTTP

const app = express();

// Middlewares
app.use(morgan('dev')); // Para ver información de las solicitudes en la consola
app.use(express.json()); // Permite manejar datos en formato JSON
app.use(express.urlencoded({ extended: true })); // Maneja datos enviados desde formularios HTML

// Servir archivos estáticos desde la carpeta "src"
app.use(express.static('src'));

// Rutas de API
app.use('/api/insertar', insertarRoutes); // Rutas para insertar
app.use('/api/based', basedRoutes); // Rutas relacionadas con "based"

// Rutas de contenido
app.use('/productos', productosRoutes); // Productos
app.use('/user', usersRoutes); // Usuarios
app.use('/registros', registrosRoutes); // Registros
app.use('/api', loginRoutes); // Rutas específicas de login bajo el prefijo "/api"

// Ruta específica para "/register" que entrega un archivo HTML
app.get('/register', (req, res) => {
    res.sendFile(path.resolve('src/registros.html')); // Muestra la página de registros
});

// Ruta específica para "/login" que entrega un archivo HTML
app.get('/login', (req, res) => {
    res.sendFile(path.resolve('src/login.html')); // Muestra la página de login
});

// Levantar el servidor en el puerto especificado
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
