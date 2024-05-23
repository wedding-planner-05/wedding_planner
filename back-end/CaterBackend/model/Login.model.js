import { DataTypes } from 'sequelize';
import { sequelize } from '../db/dbConfig.js'; // Adjust the import path accordingly
import bcrypt from "bcryptjs";

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
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
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(value, salt);
            this.setDataValue('password', hashedPassword);
        }
    }
});

User.checkPassword = (originalPassword, encryptedPassword) => {
    return bcrypt.compareSync(originalPassword, encryptedPassword);
};

// Synchronize the model with the database
(async () => {
    try {
        await User.sync(); // Avoid using force:true in production
        console.log('User table created successfully');
    } catch (error) {
        console.error('Error creating User table:', error);
    }
})();

export default User;
