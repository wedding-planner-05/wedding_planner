import {DataTypes} from "sequelize";
import sequelize from "../db/dbconfig.js";
import bcyrpt from "bcryptjs";

const User = sequelize.define("user",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    contactno :{
        type:DataTypes.INTEGER,
        allowNull: false

    },
    address : {
        type:DataTypes.TEXT,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
        
        set(value){
           let saltKey = bcyrpt.genSaltSync(10);
           let encryptedPassword = bcyrpt.hashSync(value,saltKey);
           this.setDataValue("password",encryptedPassword);
        }
    }
}
);

User.checkPassword = (originalPassword,encryptedPassword)=>{
    console.log("check Password called...."); 
    return bcyrpt.compareSync(originalPassword,encryptedPassword);
}

sequelize.sync()
.then(()=>{
    console.log("User table created....");
}).catch(err=>{
    console.log("Something wrong...");
    console.log(err);
});

export default User;


