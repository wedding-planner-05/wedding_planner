import { Sequelize } from "sequelize";

 export const sequelize = new Sequelize('cater', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});


