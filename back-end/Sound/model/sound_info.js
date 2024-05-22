
import { DataTypes } from "sequelize";
import sequelize from "../dbCongi/dbConnection.js";
import { type } from "os";

const soundVendorDetails = sequelize.define("sound_vendor_details",{
    id :{
        type : DataTypes.INTEGER ,
        primaryKey:true,
        allowNull : false,
        autoIncrement:true,
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

})


sequelize.sync().then(()=>{
    console.log("table is created");
}).catch(()=>{
    console.log("table is not created");
})

export default soundVendorDetails ;



