import { FOREIGNKEYS } from "sequelize/lib/query-types";
import banco from "../config/banco.js";
import Pessoa from "./Pessoa.js";

const Usuario = banco.sequelize.define("usuarios", {
  id: {
    type: banco.Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: banco.Sequelize.STRING(100),
  },
  senha: {
    type: banco.Sequelize.STRING(250),
  },
  categoria: {
    type: banco.Sequelize.INTEGER,
  },
  status: {
    type: banco.Sequelize.INTEGER,
  },
});

// informar o relacionamento entra objetos usuario e pessoa
Usuario.belongsTo(Pessoa, {
  //o usuario pertence ao modelo pessoa, no modelo relacional uma pessoa pode ter varios usuarios
  foreignKey: "pessoa_id", // chave estrangeira
  constraint: true,
  onDelete: "CASCADE", //quando deletar uma pessoa vai deletar o usuario dessa pessoa
  as: "pessoa",
});

Usuario.sync();

export default Usuario;
