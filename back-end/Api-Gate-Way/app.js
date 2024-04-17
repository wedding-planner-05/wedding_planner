import bodyParser from "body-parser";
import fastgateway from "fast-gateway";
// import { User } from "./model/user.model.js";
import express from "express";
import { User } from "./model/user.model.js";
const port = 3000;

const server = fastgateway({
  routes: [
    {
      prefix: "garden",
      target: "http://localhost:3001",
    },
    {
      prefix: "sound",
      target: "http://localhost:3003",
    },
    {
      prefix: "photoGrapher",
      target: "http://localhost:3002",
    },
    {
      prefix: "user",
      target: "http://localhost:3000",
    },
  ],
});
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.post("/userRouter", async (request, response, next) => {
  try {
    const { email, password } = request.body;
    console.log(request.body);
    const userObj = await User?.findOne({ where: { email }, raw: true });
    const encryptedPassword = userObj?.password;

    if (userObj) {
      if (User.checkpassword(password, encryptedPassword))
        return response.send({ message: "Sign In Success ok", userObj });
      return response.send({ message: "password is wrong" });
    } else {
      await User.create({
        email,
        password,
      })
        .then((result) => {
          return response.send({ message: "Sign In Sucess....", data: result });
        })
        .catch((err) => {
          console.log("User Error : " + err);
          return response.send({
            message: "Internal Server Error....",
            error: err,
          });
        });
    }
  } catch (err) {
    console.error(err);
    return response.send({ error: "Internal Server Error" });
  }
});

const tryStartServer = () => {
  server
    .start(port)
    .then(() => {
      console.log(`Server started at port no : ${port}`);
    })
    .catch((err) => {
      if (err.code === "EADDRINUSE") {
        console.log(`Port ${port} is already in use. Trying another port...`);
        port++;
        console.log(port);
        tryStartServer(); // Try starting the server again with the new port
      } else {
        console.error("Error:", err);
      }
    });
};

tryStartServer();

// server.start(port).then((result)=>{
//     console.log(`server started at port no : ${port}`);
// }).catch(err=>{
//     console.log("Hello World",err);
// })
