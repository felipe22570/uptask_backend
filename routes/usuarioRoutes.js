import express from "express";
import {
   autenticar,
   comprobarToken,
   confirmar,
   nuevoPassword,
   olvidePassword,
   perfil,
   registrar,
} from "../controllers/usuarioController.js";
import checkAuth from "../middleware/checkAuth.js";

//Autenticación, registro y confirmación de usuarios
const router = express.Router();

router.post("/", registrar);
router.post("/login", autenticar);
router.get("/confirmar/:token", confirmar);
router.post("/forgot-password", olvidePassword);
router.route("/forgot-password/:token").get(comprobarToken).post(nuevoPassword);

router.get("/perfil", checkAuth, perfil);

export default router;
