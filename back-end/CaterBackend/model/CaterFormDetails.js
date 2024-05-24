import { DataTypes } from 'sequelize';
import { sequelize } from '../db/dbConfig.js';
import User from './Login.model.js'; // Adjust the import path accordingly

const CaterFormDetails = sequelize.define('CaterFormDetails', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    loginUserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users', // This should match the table name of the User model
            key: 'id'
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    servicecharge: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 1000  // Default value should be a number, not a string
    },    
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    contactno: {
        type: DataTypes.STRING,
        allowNull: true
    },
    location: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:"indore"
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

CaterFormDetails.belongsTo(User, { foreignKey: 'loginUserId' });

// Synchronize the model with the database
(async () => {
    try {
        await CaterFormDetails.sync(); // Avoid using force:true in production
        console.log('CaterFormDetails table created successfully');
    } catch (error) {
        console.error('Error creating CaterFormDetails table:', error);
    }
})();

export default CaterFormDetails;
