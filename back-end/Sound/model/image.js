import { DataTypes } from "sequelize";
import sequelize from "../dbCongi/dbConnection.js";

const image = sequelize.define("image",{
   id:{
    type:DataTypes.INTEGER,
    autoIncreament:true,primaryKey:true
} ,image:{
    type:DataTypes.STRING,
    allowNull:false
},
   imageArray:{
    type:DataTypes.STRING,
    allowNull:false 
   }
});


sequelize.sync().then(()=>{
    console.log("image table is created");
}).catch(()=>{
    console.log("image table is not created");
})

export default image ;