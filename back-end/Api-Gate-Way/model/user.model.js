import { DataTypes } from "sequelize";
import sequelize from "../dbConfig/dbconfig.js";
import bcrypt from "bcryptjs"

export const User = sequelize.define("user",{
    id:{
        type:DataTypes.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    },
    name :{
        type:DataTypes.STRING,
        allowNull:false
    },
    email : {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
})

User.checkpassword = (originalPassword,encryptedPassword)=>{
    return bcrypt.compareSync(originalPassword,encryptedPassword) ;
}

sequelize.sync({force:true}).then(()=>{
    console.log("User table created successfully");
}).catch(()=>{
    console.log("User table is not created");
})

