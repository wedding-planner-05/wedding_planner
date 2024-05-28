import { DataTypes } from "sequelize";
import sequelize from "../dbConfig/dbconfig";
import { user } from "./user.model";

const review = sequelize.define("review",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    vendorId:{
        type:DataTypes.INTEGER,
        allowNull:false,

    },
    comment:{
        type:DataTypes.STRING,
        allowNull:false
    },
    rating:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})

review.belongsTo('user',{
    foreignKey:'id',
    targetKey: 'id'  
})

sequelize.sync().then(()=>{
    console.log("user table create successful in line 31");
}).catch(()=>{
    console.log('something went wrong in user table');
})
