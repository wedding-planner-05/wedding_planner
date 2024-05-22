import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";
import bcyrpt from "bcryptjs";
import GardenLogin from "./gardenLogin.model.js";

const GardenDetails = sequelize.define("gardenDetails", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    gardenId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'gardenLogins',
            key: 'id'
        }
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true
    },
    location: {
        type: DataTypes.STRING,
        allowNull: true
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    contactNo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    imageUrl: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    // rating:{
    //     type:DataTypes.STRING,
    //     allowNull:true
    // },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
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