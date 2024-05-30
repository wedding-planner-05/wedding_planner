import express from 'express' ;
import bodyParser from 'body-parser'; 
import SoundRouter from './router/sound.router.js';
import SoundInfoRouter from './router/sound_info.router.js';
// import { AllImages } from './controller/sound_info.controller.js';
import cors from 'cors'
// import ImageRouter from './router/image.router.js'
import path from 'path';
import { fileURLToPath } from 'url';

const  __filename = fileURLToPath(import.meta.url) ;
const  __dirname = path.dirname(__filename) ;

// console.log("__filename : ",__filename);
// console.log("__dirname : ",__dirname);
// console.log("path join",path.join(__dirname,"public"));

let app = express();

app.use(bodyParser.urlencoded({extended:true})) ; // use method is use to add middleware in our application 
app.use(bodyParser.json()) ;

app.use(express.static(path.join(__dirname,"public"))) ;
app.use(cors())

app.use('/sound',SoundInfoRouter);
const port = 3006 ;    

app.listen(port,()=>{
    console.log("3006 server started") ;
}); 