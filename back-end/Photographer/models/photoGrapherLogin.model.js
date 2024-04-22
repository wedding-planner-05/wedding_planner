import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";
import bcyrpt from "bcryptjs";

const PhotoGrapherLogin = sequelize.define("photoGrapherLogins", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            let saltKey = bcyrpt.genSaltSync(10);
            let encryptedPassword = bcyrpt.hashSync(value, saltKey);
            this.setDataValue("password", encryptedPassword);
        }
    },


});
PhotoGrapherLogin.checkPassword = (originalPassword, encryptedPassword) => {
    console.log("check Password called....");
    return bcyrpt.compareSync(originalPassword, encryptedPassword);
}
console.log('-------------------------------------');
sequelize.sync({force:true})
    .then((result) => {
        console.log("PhotoGrapher table created...");
    }).catch(err => {
        console.log("Something wrong...");
        console.log(err);
    });

export default PhotoGrapherLogin;

