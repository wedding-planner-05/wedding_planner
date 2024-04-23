import { DataTypes } from "sequelize";
import sequelize from "../dbConfig/dbconfig.js";
import bcrypt from "bcryptjs"

export const User = sequelize.define("user",{
    email : {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password : {
        type : DataTypes.STRING,
        allowNull:false,
        set(value){
            const saltKey = bcrypt.genSaltSync(10);
            const encryptedPassword = bcrypt.hashSync(value,saltKey);
            this.setDataValue("password",encryptedPassword);
        }
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

