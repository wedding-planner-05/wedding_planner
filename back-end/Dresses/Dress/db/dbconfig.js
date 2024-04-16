import { Sequelize } from "sequelize";
const sequelize =  new Sequelize("Dress","root","root",{
    host : 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(()=>{
    console.log("Database connected");
}).catch(()=>{
    console.log("database not coonected");
    console.log(err);
});
export default sequelize;