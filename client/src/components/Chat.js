/* eslint-disable no-restricted-globals */
import React from "react";
import { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { useLocation } from "react-router-dom";
import InfoBar from "./InfoBar";
import "./Chat.css"
import Messages from "./Messages";
import Input from "./Input";
let socket;
const Chat = () => {
  const location = useLocation();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const PORT = "localhost:3001";
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(PORT, { transports: ["websocket", "polling", "flashsocket"] });

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, () => {});
    return () => {
      socket.disconnect()
    };
  }, [PORT, location.search]);

  useEffect(() => {
    socket.once("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

 const sendMessage=(e)=>{
  e.preventDefault()
  if(message){
    socket.emit("sendMessage",message,()=>{
      setMessage("")
    })
  }

 }


 
  return (
    <div className="outerContainer bg-blue-300">
      <div className="container shadow-2xl">
      <InfoBar room={room}/>
      <Messages  messages={messages} name={name}/>
      <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
      </div>
    </div>
  );
};

export default Chat;
