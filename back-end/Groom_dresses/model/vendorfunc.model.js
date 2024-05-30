import { DataTypes } from "sequelize";
import sequelize from "../db/dbconfig.js";

// import bcyrpt from "bcryptjs";
// create table dress_details(id int primary key auto_increment,type varchar(255) not null,title varchar(255) not null,
// size int not null,colour varchar(255) not null,imageurl text not null);
// console.log(name + " " + imageUrl + " " + serviceCharge + " " + address + " " + description + ' ' + rating)

const VendorFunc = sequelize.define("dress_details",{
   id:{
    type:DataTypes.INTEGER,
    // primaryKey:true,
    autoIncrement:true,
    // references:{
    //     model:"dress_vendors",
    //     key:'id'
    // }
    },  
    name:{
    type:DataTypes.STRING,
    allowNull:false
    },
    type :{
        type:DataTypes.STRING,
        defaultValue:"dress"
    },
    address:{
        type:DataTypes.STRING,
        allowNull:false

        },
    serviceCharge:{
        type:DataTypes.DECIMAL,
        allowNull:false

    },

    imageUrl:{
        type:DataTypes.TEXT,
        allowNull:false
    },

    rating:{
      type:DataTypes.DECIMAL,
      allowNull:true
    },

    description:{
        type:DataTypes.TEXT,
        allowNull:false
    },

    contactno:{
        type:DataTypes.TEXT,
        allowNull:false,
        defaultValue:"9302558280"
    }

})
sequelize.sync().then(()=>{
    
console.log("dress details table created ");
}).catch(()=>{
    console.log("dress details table not created")


})


export default  VendorFunc;


