import Sequelize from 'sequelize' ;

const sequelize = new Sequelize("vivah","root","root",{
    dialect : 'mysql' , host : 'localhost'
}) ;    

sequelize.authenticate().then(()=>{
    console.log("Vivah Database connected");
}).catch(()=>{
    console.log("Database not connected");
})

export default sequelize ;