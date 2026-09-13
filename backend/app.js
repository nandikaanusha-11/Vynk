import express from "express";
import cors from "cors";
import {connect_to_socket} from "./src/controllers/SocketManager.js";
import {createServer} from "node:http";  //node:http is used to create a normal HTTP server
import mongoose from"mongoose";
import "dotenv/config";

import userRoutes from "./src/routes/user_routes.js";

const app=express();
const server=createServer(app);
const io=connect_to_socket(server);



app.use(cors());
app.use(express.json({"limit":"40kb"}));
app.use(express.urlencoded({"limit":"40kb",extended:true}));

app.use("/api/v1/users",userRoutes);


app.set("port",(process.env.PORT||8000));

const start=async()=>{
    const connectDB=await mongoose.connect(process.env.MONGO_URL);
    console.log("db connected successfully");
    server.listen(app.get("port"),()=>{
    console.log("server is running on port 8000");
  })
};

start();