import { Router } from "express";
import { getAllProductos } from "../controllers/userscontroller.js";

const router = Router();
// router.get('/productos', getproductos);
// obtener todos los productos CRUD
router.get('/all', getAllProductos);

export default router;