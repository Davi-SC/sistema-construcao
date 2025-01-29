import Usuario from "../models/Usuario.js";
import Pessoa from "../models/Pessoa.js";

class UsuarioController {
  cadastrar = async function (req, res) {
    const pessoas = await Pessoa.findAll();
    res.render("usuario/cadastro", { pessoas: pessoas }); // essa é a pagina nos views que a função cadastrar vai renderizar na hora que for chamada
  };

  salvar = function (req, res) {
    let usuario = {
      username: req.body.username,
      senha: req.body.senha,
      categoria: req.body.categoria,
      pessoa_id: req.body.pessoa_id,
      status: 1,
    };
    Usuario.create(usuario).then(function () {
      console.log("Usuario cadastrado com sucesso");
      res.redirect("/");
    });
  };
}

export default new UsuarioController();
