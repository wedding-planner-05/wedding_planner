import Sequelize from "sequelize";

const sequelize = new Sequelize("heenaArtist","root","root",{
    dialect:"mysql",
    host:"localhost"
});

sequelize.authenticate().then(res=>{
    console.log("Heena artist databse connected");
}).catch(err=>{
    console.log("something went wrong in henna artist database");
})  ;
