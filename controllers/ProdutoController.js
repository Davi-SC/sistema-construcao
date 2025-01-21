import Produto from "../models/produto";

class ProdutoController {
  index = async function (req, res) {
    const produtos = await Produto.findAll();
    res.render("produto/lista", { produtos: produtos }); // O controller manda para a visão os produtos
  };
}

export default new ProdutoController();
