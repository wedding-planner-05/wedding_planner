
import { DataTypes } from "sequelize";
import sequelize from "../dbCongi/dbConnection.js";

const soundVendorDetails = sequelize.define("sound_vendor_details",{
    // vendor_id :{
    //     type : DataTypes.INTEGER ,
    //     references : {
    //         model : "sound_vendors",
    //         key : "id"
    //     },
    //     allowNull : false 
    // },
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
    rating : {
        type : DataTypes.STRING,
        allowNull:true
    },
    description : {
        type : DataTypes.TEXT,
        allowNull :true 
    },
    contactno : {
        type : DataTypes.STRING,
        allowNull: true
    }

    // status : {
    //     type : DataTypes.BOOLEAN ,
    //     allowNull :false 
    // }
})

sequelize.sync().then(()=>{
    console.log("table is created");
}).catch(()=>{
    console.log("table is not created");
})

export default soundVendorDetails ;