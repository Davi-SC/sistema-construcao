//Arquivo para configurar a conexão com o banco de dados
// Primeiro precisa instalar sequelize e mysql2 no npm install
import Sequelize from "sequelize"; // esse sequelize é uma classe

const NOME_BANCO = "loja";
const USUARIO = "root";
const SENHA = "";
const HOST = "localhost"; //O banco de dados esta na mesma maquina que o node esta rodando

const sequelize = new Sequelize(NOME_BANCO, USUARIO, SENHA, {
  //Aqui estabelecemos um objeto para conectar o banco de dados, este objeto sera utilizado por todos os nossos modulos para trabalhar com o BD
  host: HOST,
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(function () {
    // Tenta se conectar com o banco de dados, retorna um promess(tentativa de conexão que pode levar um tempo para executar), por isso o then(), que so ocorre se o authenticate funcionar corretamente1
    console.log("Conexão realizada com sucesso");
  })
  .catch(function (erro) {
    // se o authenticate der erro o catch ira exibir
    console.log("Erro" + erro);
  });

export default { Sequelize, sequelize };
