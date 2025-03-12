import { Router } from "express";
import { getAllProductos } from "../controllers/apiservicioscontroller.js";

const router = Router();
// router.get('/productos', getproductos);
// obtener todos los productos CRUD
router.get('/servicios', getAllProductos);

export default router;