import bodyParser from "body-parser";
import fastgateway from "fast-gateway";
// import { User } from "./model/user.model.js";
import express from "express";
import { User } from "./model/user.model.js";
import cors from 'cors' ;
const port = 3000;

const server = fastgateway({
  routes: [
    {
      prefix: "cater",
      target: "http://localhost:3001",
      
    },
    {
      prefix: "dress",
      target: "http://localhost:3002",
    },
    {
      prefix: "garden",
      target: "http://localhost:3003",
    },
    {
      prefix:'mehendi',
      target:'http://localhost:3004'
    },
    {
      prefix:"photographer",
      target:'http://localhost:3005'
    },
    {
      prefix:'sound',
      target:"http://localhost:3006"
    }
    // {
    //   prefix: "user",
    //   // target: "http://localhost:3000",
    // },
  ]
});
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors())

server.post("/userRouter", async (request, response, next) => {
  try {
    const { email, password } = request.body;
    console.log("Data In Body : " , request.body);
    const userObj = await User?.findOne({ where: { email }, raw: true });
    const encryptedPassword = userObj?.password;

    if (userObj) {
      if (User.checkpassword(password, encryptedPassword)){
        response.statusCode = 200 ;
        return response.send({ message: "Sign In Success ok", data : userObj , code : response.statusCode});
      }
      response.statusCode = 401 ;
      return response.send({ message: "password is wrong" , code : response.statusCode });
    } else {
      await User.create({email,password})
        .then((result)=>{
                 response.statusCode = 200 
          return response.send({ message: "Sign In Sucess....", data: result , code : response.statusCode});
        })
        .catch((err) => {
          console.log("User Error : " + err);
          response.statusCode = 401  
          return response.send({message: "Internal Server Error....",message: err, code : response.statusCode}); 
        });
    }
  } catch (err) {
    console.error(err);
    response.statusCode = 401 ;
    return response.send({ error: "in catch block Internal Server Error",message  : err, code : response.statusCode});
  }
});

// const tryStartServer = () => {
//   server
//     .start(port)
//     .then(() => {
//       console.log(`Server started at port no : ${port}`);
//     })
//     .catch((err) => {
//       if (err.code === "EADDRINUSE") {
//         console.log(`Port ${port} is already in use. Trying another port...`);
//         port++;
//         console.log(port);
//         tryStartServer(); // Try starting the server again with the new port
//       } else {
//         console.error("Error:", err);
//       }
//     });
// };

// tryStartServer();

server.start(port).then((result)=>{
    console.log(`server started at port no : ${port}`);
}).catch(err=>{
    console.log("Hello World",err);
})
