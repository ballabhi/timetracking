



const express = require('express');
const app = express();
const path  = require("path");

const http = require("http");

const server = require("socket.io");
const server = http.createServer(app);

const io = socket.io(server);
s
app.set("view engine", "ejs");
app.set(express.static(path.join(__dirname, "public")));

io.on("connection", function (socket){
    socket.on("send-location", function (data) {
   io.emit("receive-location", { id: socket.id, ...data  });      
    });
    socket.on("disconnect" , function () {
io.emit("user-disconnected", socket.id);
    })
});

app.get("/", function (req , res){
    res.render("index");
});
server.listen(3000);