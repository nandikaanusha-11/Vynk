import {Server} from "socket.io";  //node:http is used to create a normal HTTP server

export const connect_to_socket=(server)=>{
   return new Server(server);
   
};