import { DataTypes } from "sequelize";
import { sequelize } from "../db/dbConfig.js"; // Assuming you've defined sequelize instance correctly

const CaterFormDetails = sequelize.define("CaterFormDetails", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    servicecharge: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contactno: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

(async () => {
    try {
        await CaterFormDetails.sync(); // This will drop the table if it already exists
        console.log('User table created successfully');
    } catch (error) {
        console.error('Error creating User table:', error);
    }
})();

export default CaterFormDetails;
