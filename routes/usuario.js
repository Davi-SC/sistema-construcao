import express from "express";
const router = express.Router();
import UsuarioController from "../controllers/UsuarioController.js";

router.get("/login", (req, res) => {
  res.render("usuario/login");
});
router.get("/login", UsuarioController.login);
router.post("/logout", UsuarioController.logout);

export default router;
