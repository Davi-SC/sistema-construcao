import express from "express";
const app = express();
import path from "path";
import { fileURLToPath } from "url";
import handlebars from "express-handlebars";
import Handlebars from "handlebars";
import bodyParser from "body-parser";
import { allowInsecurePrototypeAccess } from "@handlebars/allow-prototype-access";

// Pasta estatica
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, "public")));

// visão
app.engine(
  "handlebars",
  handlebars.engine({
    defaultLayout: "principal",
    handlebars: allowInsecurePrototypeAccess(Handlebars),
  })
);
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas
app.get("/", function (req, res) {
  var aluno = {
    nome: "Fulaninho",
    nota: 7.5,
  };

  res.render("admin/index", { aluno });
});

// agora usando o router, mantemos a rota principal

//definindo o produto.js como produto de rotas
import produto from "./routes/produtos.js";
app.use("/produto", produto);

import pessoa from "./routes/pessoa.js";
app.use("/pessoa", pessoa);

//   res.render("admin/index", { aluno });
// });

// app.get("/contato", function (req, res) {
//   res.render("admin/contato");
// });

// app.get("/cadastro", function (req, res) {
//   res.render("produto/cadastro");
// });

// app.get("/produto", function (req, res) {
//   const produtos = [
//     {
//       id: 22,
//       descricao: "mouse",
//       preco: 22,
//       estoque: 20
//     },
//     {
//       id: 21,
//       descricao: "mouse",
//       preco: 2,
//       estoque: 20
//     },
//     {
//       id: 22,
//       descricao: "mouse",
//       preco: 22,
//       estoque: 20
//     },
//     {
//       id: 22,
//       descricao: "mouse",
//       preco: 22,
//       estoque: 20
//     },
//     {
//       id: 22,
//       descricao: "mouse",
//       preco: 22,
//       estoque: 20
//     },
//     {
//       id: 22,
//       descricao: "mouse",
//       preco: 22,
//       estoque: 20
//     },
//     {
//       id: 22,
//       descricao: "mouse",
//       preco: 22,
//       estoque: 20
//     },
//     {
//       id: 22,
//       descricao: "mouse",
//       preco: 22,
//       estoque: 20
//     },
//     {
//       id: 22,
//       descricao: "mouse",
//       preco: 22,
//       estoque: 20
//     },
//     {
//       id: 22,
//       descricao: "mouse",
//       preco: 22,
//       estoque: 20
//     }
//   ];
//   res.render("produto/lista",{produtos:produtos});
// });

// app.post("/cadastro", function (req, res) {
//   var produto = {
//     descricao: req.body.descricao,
//     estoque: req.body.estoque,
//     preco: req.body.preco,
//     status: 1,
//     foto: "/img/semfoto.png",
//   };
//   res.render("produto/detalhe", { produto });
// });

// Servidor
app.listen(3921, () =>
  console.log("Servidor truando em http://localhost:3921")
);
