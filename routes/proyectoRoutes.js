import {
   obtenerProyectos,
   nuevoProyecto,
   obtenerProyecto,
   editarProyecto,
   eliminarColaborador,
   eliminarProyecto,
   agregarColaborador,
   buscarColaborador,
} from "../controllers/proyectoController.js";
import express from "express";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.get("/", checkAuth, obtenerProyectos);
router.post("/", checkAuth, nuevoProyecto);

router
   .route("/:id")
   .get(checkAuth, obtenerProyecto)
   .put(checkAuth, editarProyecto)
   .delete(checkAuth, eliminarProyecto);

router.post("/colaboradores", checkAuth, buscarColaborador);
router.post("/colaboradores/:id", checkAuth, agregarColaborador);
router.post("/eliminar-colaborador/:id", checkAuth, eliminarColaborador);

export default router;
