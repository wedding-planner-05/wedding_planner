import { DataTypes } from "sequelize";
import sequelize from "../dbConfig/dbconfig";
import bcrypt from "bcryptjs"

const User = sequelize.define("user",{
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
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

sequelize.sync().then(()=>{
    console.log("User table created successfully");
}).catch(()=>{
    console.log("User table is not created");
})

