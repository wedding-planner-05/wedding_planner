import { Sequelize } from "sequelize";

const sequelize = new Sequelize("seqdb", "root", "root", {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => {
        console.log("Datbase connected.... hello" );
    }).catch(err => {
        console.log("Database Connection Failed..");
        console.log(err);
    });

export default sequelize;