import Pessoa from "../models/Pessoa.js";
import Usuario from "../models/Usuario.js";

class PessoaController {
  index = async function (req, res) {
    let pessoas = await Pessoa.findAll();
    res.render("pessoa/index", { pessoas: pessoas });
  };

  cadastrar = function (req, res) {
    res.render("pessoa/cadastrar");
  };

  salvar = function(req,res){
    let pessoa = {
      nome : req.body.nome,
      telefone : req.body.telefone,
      email : req.body.email,
      cpf : req.body.cpf,
      
    }
    Pessoa.create(pessoa).then(function(){  //o then é similar ao await, não precisa usar os dois juntos
      res.redirect('/pessoa')
    }) // essa função faz a comunicação direta do modelo e o view
  }

  perfil = async function(req,res){
    let id = req.params.id
    let pessoa = await Pessoa.findByPK(id)
    let usuarios = await Usuario.findAll({
      where:{
        pessoa_id:id
      }
    })
    res.render('pessoa/perfil',{pessoa:pessoa,usuario:usuarios})

  }
}

export default new PessoaController();
