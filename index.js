import express from "express";
const app = express();
import path from "path";
import { fileURLToPath } from "url";
import handlebars from "express-handlebars";
import Handlebars from "handlebars";
import bodyParser from "body-parser";
import { allowInsecurePrototypeAccess } from "@handlebars/allow-prototype-access";

//Pasta estatica
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, "public")));

//configuração da visão
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

//Configuração das rotas

app.get("/", function (req, res) {
  res.render("admin/index");
});

app.listen(3921, () =>
  console.log("Servidor rodando em http://localhost:3921")
);
