import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";
import bcyrpt from "bcryptjs";

const PhotoGrapherDetails = sequelize.define("photoGrapherDetails", {
    
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    photographerId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'photoGrapherLogins',
            key: 'id'
        }
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
    ,
    contactNo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    rating: {
        type: DataTypes.STRING,
        allowNull: true
    },

    imageUrl: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    }
});

console.log('-------------------------------------');
sequelize.sync({ force: true })
    .then((result) => {
        console.log("PhotoGrapher Details table created...");
    }).catch(err => {
        console.log("Something wrong.....");
        console.log(err);
    });

export default PhotoGrapherDetails;

