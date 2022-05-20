import "dotenv/config";
import cors from "cors";
import bodyParser from "body-parser";
import express from "express";
import usersRoutes from "./Routes/usersRoutes";
import mongoose from "mongoose";

import session from "express-session";

import passport from "passport";
import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();



const io = new Server(httpServer, {
    cors: {
        origin: '*',
        methods: ["GET", "POST"]

    }
  });

const app = express();
// MIDDELWARES
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 50000 },
  })
);
app.use(passport.initialize());

app.use(passport.session());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
// ENVS
const port = process.env.PORT || 4000;

//ROUTES
app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/users", usersRoutes);
io.on('connection', (socket) => {
  socket.emit('me', socket.id);
   
  socket.on('disconnect', () => {
      socket.broadcast.emit("callended");
  })
  socket.on("calluser", ({ userToCall,signalData, from, name}) => {
io.to(userToCall).emit("calluser", { signal: signalData, from, name});
  })
socket.on("answercall", (data) => {
  io.to(data.to).emit("callaccepted", data.signal)
})
})
// SERVER
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB connected 😎");
    app.listen(port, (req, res) => {
      console.log("App runing on  ✌👍" + port);
    });
    httpServer.listen(8081,() => console.log(`Server listening on port ${8081}`) );
  })
  .catch((error) => {
    console.log(error);
  });
