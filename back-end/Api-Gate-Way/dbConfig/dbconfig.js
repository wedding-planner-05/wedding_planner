import {Sequelize} from "sequelize"  ;

const sequelize = new Sequelize("weddinguser","root","root",{
    host:"localhost",
    dialect:"mysql"
})

sequelize.authenticate().then(()=>{
    console.log("Database connected") ;
}).catch(()=>{
    console.log("Database not connected") ;
})

export default sequelize ;
