import bodyParser from "body-parser";
import fastgateway from "fast-gateway";
// import { User } from "./model/user.model.js";
import express from "express";
import { User } from "./model/user.model.js";
// import otpRouter from "../MailOtpSender/otpSender.route.js"

import cors from 'cors' ;
const port = 3000;

const server = fastgateway({
  routes: [
    {
      prefix: "otp",
      target: "http://localhost:8080",
      
    },
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

// server.post('/otp',otpRouter);

server.post('/userSingIn',async (request, response, next) => {
    try {
        console.log(request.body);
    } catch (error) {
      
    }
})

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

server.start(port).then((result)=>{
    console.log(`server started at port no : ${port}`);
}).catch(err=>{
    console.log("Hello World",err);
})
