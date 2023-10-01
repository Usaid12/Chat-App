const express = require("express");
const cors = require("cors");
const http = require("http");
const app = express();
const router = require("./router");
const socketio = require("socket.io");
const PORT = 3001;
const server = http.createServer(app);
const io = socketio(server);
const { addUser, removeUser, getUser, getUsersinRoom } = require("./users");
const auth=require("./Auth")
const bodyParser=require("body-parser")
app.use(bodyParser.json())
app.use(cors());
app.use("/auth",auth.handleSignup)
io.on("connection", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });
    if (error) {
      return callback(error);
    }
    socket.emit("message", {
      user: "admin",
      text: `${user.name},Welcome to the room ${user.room}`,
    });
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name} has joined` });
    socket.join(user.room);
    io.to(user.room).emit("roomData",{room:user.room,users:getUsersinRoom(user.room)})
    callback();
  });
  socket.on("sendMessage",(message,callback)=>{
    const user=getUser(socket.id)
    io.to(user.room).emit("message",{user:user.name,text:message})
    io.to(user.room).emit("roomData",{room:user.room,users:getUsersinRoom(user.room)})
    callback()

  })
  socket.on("disconnect", ()=>{
   const user=removeUser(socket.id)
   if(user){
    io.to(user.room).emit("message",{user:"admin",text:`${user.name} has left the chat`})
    
   }
  });
  

});

app.use(router);

server.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
