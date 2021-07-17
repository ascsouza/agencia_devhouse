const express = require("express");

const app = express();


app.get('/', (req, res) => res.send("Bem vindo"));
app.get('/manutencao', (req, res) => {
    res.sendFile(__dirname + '/views/manutencao.html')});

app.listen(3000, () => console.log("Servidor foi iniciado!"));