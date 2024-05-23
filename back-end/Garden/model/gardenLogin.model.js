import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";
import bcyrpt from "bcryptjs";

const GardenLogin = sequelize.define("gardenLogins", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
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
    type: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'garden',
    }
});

GardenLogin.checkPassword = (password, encryptedPassword) => {
    return bcyrpt.compareSync(password, encryptedPassword);
}

sequelize.sync()
    .then(() => {
        console.log("Garden Details Tables created successfully.");
    }).catch(err => {
        console.log("Something went wrong:");
        console.log(err);
    });

export default GardenLogin;