var express = require("express");
var router = express.Router();
const mysql = require("mysql");
var app = express();

const conexao = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "mydb"
});

conexao.connect();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });


app.get("/", function(request, response) {
    conexao.query("SELECT * FROM categoria", function(error, rows) {
    if (error) {
    response.status(500).send(error);
    }
    response.status(200).send(rows);
    });
});

app.get("/:id", function(request, response) {
    conexao.query(
    "SELECT * FROM categoria where id = " + parseInt(request.params.id),
    function(error, rows) {
    if (error) {
    response.status(500).send(error);
    }
    if (rows.length > 0) {
    response.status(200).send(rows);
    } else {
    response.status(404).send("Not Found");
    }
    });
});

app.post("/", function(request, response) {
    conexao.query(
    "INSERT INTO categoria (nome) values ('" +
    request.body.nome +
    "')",
    function(error, rows) {
    if (error) {
    response.status(500).send(error);
    }
    response.status(201).send("");
    });
});

app.put("/:id", function(request, response) {
    conexao.query(
    "UPDATE categoria set nome = '" +
    request.body.nome +
    "' where id = " + parseInt(request.params.id),
    function(error, rows) {
    if (error) {
    response.status(500).send(error);
    }
    response.status(204).send("");
    });
    });

app.delete("/:id", function(request, response) {
    conexao.query(
    "DELETE from categoria where id = " + parseInt(request.params.id),
    function(error, rows) {
    if (error) {
    response.status(500).send(error);
    }
    response.status(204).send("");
    });
});

module.exports = app;
