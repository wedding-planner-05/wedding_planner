import { Sequelize } from "sequelize";
const sequelize =  new Sequelize("sequelize","root","root",{
    host : 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(()=>{
    console.log("Database connected");
}).catch((err)=>{
    console.log("database not coonected");
    console.log(err);
});
export default sequelize;