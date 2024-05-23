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
        allowNull: false,
        references: {
            model: 'gardenLogins',
            key: 'id'
        }
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
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