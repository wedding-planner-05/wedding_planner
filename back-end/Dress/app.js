import express from "express";
import bodyParser from "body-parser";
import UserRouter from "./router/user.route.js";
// import VendorRouter from "./router/vendor.route.js";
import  cors  from "cors";
import VendorFuncRouter from "./router/vendorfunc.route.js"
import path from "path";
import { fileURLToPath } from "url";


const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);





const app = express();
app.use(express.static(path.join(_dirname,"public")))


// ------------------------suggested by cgpt--------------------------
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
// -----------------------------------------------------


// console.log(express.static(path.join(_dirname,"public")));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use("/user",UserRouter);
app.use("/dress",VendorFuncRouter);

app.use(cors());
const port = 3002;

app.listen(port,()=>{
    console.log("server started");
});
