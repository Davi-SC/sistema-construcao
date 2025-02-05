import express from "express";
const router = express.Router();
import PessoaController from "../controllers/PessoaController.js";

router.get("/", PessoaController.index); // essa barra sozinha representa o grupo de rotas pessoa, entao no site vai ser o caminho /pessoa
router.post("/salvar", PessoaController.salvar)
router.get("/cadastrar", PessoaController.cadastrar);


export default router;
