import { DataTypes } from "sequelize";
import sequelize from "../db/dbconfig.js";

// import bcyrpt from "bcryptjs";
// create table dress_details(id int primary key auto_increment,type varchar(255) not null,title varchar(255) not null,
// size int not null,colour varchar(255) not null,imageurl text not null);
// console.log(name + " " + imageUrl + " " + serviceCharge + " " + address + " " + description + ' ' + rating)

const VendorFunc = sequelize.define("dress_details",{
   id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
},  
name:{
type:DataTypes.STRING,
allowNull:true
},

address:{
    type:DataTypes.STRING,
    allowNull:true
    
    },
serviceCharge:{
    type:DataTypes.DECIMAL,
    allowNull:true

},

imageUrl:{
    type:DataTypes.TEXT,
    allowNull:true
},

rating:{
  type:DataTypes.DECIMAL,
  allowNull:true
},

description:{
    type:DataTypes.TEXT,
    allowNull:true
},

contactno:{
    type:DataTypes.TEXT,
    allowNull:true
},
vendor_id:{
    type:DataTypes.INTEGER,
    references:{
        model:"dress_vendors",key:'id'
    }
}

})
sequelize.sync().then(()=>{

console.log("dress details table created ");
}).catch(()=>{
    console.log("dress details table not created")


})


export default  VendorFunc;


