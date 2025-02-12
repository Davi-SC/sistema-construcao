import Usuario from "../models/Usuario.js";
import Pessoa from "../models/Pessoa.js";

class UsuarioController {
  login = function (req, res, next) {
    passport.authenticate("local", {
      sucessRedirect: "/admin",
      failureRedirect: "/usuario/login",
      failureFlash: true,
    })(req, res, next);
  };

  logout = function (re, res, next) {
    req.logout(function (erro) {
      req.redirect("/usuario/login");
    });
  };
}

export default new UsuarioController();
