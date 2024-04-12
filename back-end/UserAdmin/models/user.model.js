import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";
import bcyrpt from "bcryptjs";

const User = sequelize.define("user", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // name: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    // },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            let saltKey = bcyrpt.genSaltSync(10);
            let encryptedPassword = bcyrpt.hashSync(value, saltKey);
            this.setDataValue("password", encryptedPassword);
        }
    }
    // contactNo: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    // }
})
User.checkPassword = (originalPassword, encryptedPassword) => {
    console.log("check Password called....");
    return bcyrpt.compareSync(originalPassword, encryptedPassword);
}

sequelize.sync()
    .then((result) => {
        console.log("User table is created...");
    }).catch(err => {
        console.log("something went wrong")
    })

export default User;