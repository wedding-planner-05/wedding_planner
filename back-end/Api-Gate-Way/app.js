import cors from "cors";
import express from "express";
import bodyParser from "body-parser";


const app = express.Router() ;

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json()) ;
app.use(express.json()) ;
app

import fastgateway from 'fast-gateway'
const port = 8000 ;

const server = fastgateway({
    routes : [
        {
            prefix:'/garden',
            target:'http://localhost:3001',
            methods:['post']
        },
        {
            prefix:'sound',
            target:'http://localhost:3003'
        },
        {
            prefix:"photoGrapher",
            target:"http://localhost:3002"
        },
        {
            prefix:"user",
            target:"http://localhost:8000",
            methods:["post"],
        }
    ]
})



server.start(port).then((result)=>{
    console.log(`server started at port no : ${port}`);
}).catch(err=>{
    console.log("Hello World",err);
})
