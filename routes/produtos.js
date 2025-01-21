import express from "express";
const router = express.Router();

import ProdutoController from "../controllers/ProdutoController";

// Criar um grupo de rotas para produtos, deve ter o nome do site.com/produto
// Vamos criar tambem a rota site.com/produto/lista para mostrar todos os produtos

// router.get("/lista", function (req, res) {
//   res.render("produto/lista");
// }); // la em index.js define a rota

// router.get("/cadastro", function (req, res) {
//   res.render("produto/lista");
// });

router.get("/lista", ProdutoController.lista);

export default router; // exportando o router
