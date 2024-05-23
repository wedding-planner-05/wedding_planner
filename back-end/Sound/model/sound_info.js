
import { DataTypes } from "sequelize";
import sequelize from "../dbCongi/dbConnection.js";
import { type } from "os";

const soundVendorDetails = sequelize.define("sound_vendor_details",{
    id :{
        type : DataTypes.INTEGER ,
        primaryKey:true,
        allowNull : false,
<<<<<<< HEAD
        autoIncrement:true  
    },
    soundId: {
        type : DataTypes.INTEGER,
        allowNull:true ,
=======
        autoIncrement:true,
>>>>>>> 470257cbeb840140de0779b45e93505ef6e3574a
        references : {
            model : "sound_vendors",
            key : "id"
        }   
    },
    name : {
        type:DataTypes.STRING,
        allowNull: false

    },
    type : {
        type : DataTypes.STRING,
        allowNull : false ,
        defaultValue: 'sound'
    },
    imageUrl : {
        type : DataTypes.STRING ,
        allowNull : false 
    },
    serviceCharge : { 
        type : DataTypes.INTEGER ,
        allowNull : false    
    },
    address:{
        type : DataTypes.STRING,
        allowNull : false
    },
    description : {
        type : DataTypes.TEXT,
        allowNull :true 
    },
    contactNo : {
        type : DataTypes.STRING,
        allowNull: true
    }
<<<<<<< HEAD
=======

>>>>>>> 470257cbeb840140de0779b45e93505ef6e3574a
})


sequelize.sync().then(()=>{
    console.log("table is created");
}).catch(()=>{
    console.log("table is not created");
})

export default soundVendorDetails ;



