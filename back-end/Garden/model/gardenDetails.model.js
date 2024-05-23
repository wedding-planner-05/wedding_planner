import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";
import bcyrpt from "bcryptjs";
import GardenLogin from "./gardenLogin.model.js";

const GardenDetails = sequelize.define("gardenDetails", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 143ffeb4a5cb5c1f11591c65fc4e3adc8422ad20
        autoIncrement: true
    },
    gardenId: {
        type: DataTypes.INTEGER,
        allowNull: false,
<<<<<<< HEAD
=======
        autoIncrement: true,
>>>>>>> 10a444711c1cab0024827a40e257f7929261d534
=======
        autoIncrement: true,
>>>>>>> 143ffeb4a5cb5c1f11591c65fc4e3adc8422ad20
        references: {
            model: 'gardenLogins',
            key: 'id'
        }

    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 143ffeb4a5cb5c1f11591c65fc4e3adc8422ad20
    },
    type : {
        type : DataTypes.STRING,
        allowNull : false ,
        defaultValue: 'garden'
<<<<<<< HEAD
>>>>>>> 10a444711c1cab0024827a40e257f7929261d534
=======

>>>>>>> 143ffeb4a5cb5c1f11591c65fc4e3adc8422ad20
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    contactNo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

GardenDetails.belongsTo(GardenLogin, { foreignKey: 'gardenId' });

sequelize.sync()
    .then(() => {
        console.log("Garden Logins Tables created successfully.");
    }).catch(err => {
        console.log("Something went wrong:");
        console.log(err);
    });

export default GardenDetails;