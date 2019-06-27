var express = require("express");
var router = express.Router();
const mysql = require("mysql");
var app = express();

const conexao = mysql.createConnection({
host: "localhost",
user: "root",
password: "wellk4mp",
database: "mydb"
});

conexao.connect();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });

app.get("/", function(request, response) {
  conexao.query("SELECT * FROM produto", function(error, rows) {
  if (error) {
  response.status(500).send(error);
  }
  response.status(200).send(rows);
  });
  });

app.post("/", function(request, response) {
    conexao.query(
    "INSERT INTO produto (nome, preco, categoria_id) values ('" + request.body.nome + "', " + request.body.preco + ',' + request.body.categoria_id +")",
    function(error, rows) {
    if (error) {
    response.status(500).send(error);
    }
    response.status(201).send("");
    });
});


module.exports = app;