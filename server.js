const express = require('express');
const socket = require('socket.io');

let app = express();
let server = app.listen(6006);

const io = socket(server);

function newConnecction(socket) {
    console.log("Usuario Conectado");
    socket.on('mouse', mousePosition);
}

function mousePosition(data) {
    console.log(data);
}

io.sockets.on('connection', newConnecction);

console.log("Servidor Corriendo");

app.use(express.static('public'));