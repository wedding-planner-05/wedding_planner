import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";
import bcyrpt from "bcryptjs";
import GardenLogin from "./gardenLogin.model.js";

const GardenDetails = sequelize.define("gardenDetails", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        references: {
            model: 'gardenLogins',
            key: 'id'
        }

    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type : {
        type : DataTypes.STRING,
        allowNull : false ,
        defaultValue: 'garden'
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