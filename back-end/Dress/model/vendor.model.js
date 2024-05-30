
import { DataTypes } from "sequelize";
import sequelize from "../db/dbconfig.js";
import bcyrpt from "bcryptjs";
const Vendor = sequelize.define("dress_vendor",{
    id:{
        type : DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    email:{ 
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
            set(value){
            let saltKey = bcyrpt.genSaltSync(10);
            let encryptedPassword = bcyrpt.hashSync(value,saltKey);
            this.setDataValue("password",encryptedPassword);
         }

    }
})

Vendor.checkPassword = (originalPassword,encryptedPassword)=>{
    console.log("check Password called....",(originalPassword,encryptedPassword)); 
    return bcyrpt.compareSync(originalPassword,encryptedPassword);
}


sequelize.sync().then(()=>{
    console.log("dress vendor table created sucessfullly");
}).catch(()=>{
    console.log("dress vendor table not created");
});

export default Vendor;

