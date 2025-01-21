class ProdutoController {
  lista = function (req, res) {
    res.render("produto/lista");
  };
}

export default new ProdutoController();
