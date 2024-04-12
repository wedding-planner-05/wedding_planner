import "./dbConnection/dbConn.js"
import express from "express"

const app = express() ;

app.listen(3000,()=>{
    console.log("Heena server");
})