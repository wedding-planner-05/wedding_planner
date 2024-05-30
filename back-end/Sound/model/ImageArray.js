import sequelize from "../dbCongi/dbConnection.js";
import { DataTypes } from "sequelize";

const Posts = sequelize.define("post", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,   
        autoIncrement: true,
    },
    vendorId:{
        type:DataTypes.INTEGER,
        allownull:false,
        references: {
            model: "sound_vendor_details",
            key: "vendorId"
          }
    },
    images: {
        type: DataTypes.STRING,
        allownull:true
    }
})


sequelize.sync().then(()=>{
    console.log("post table is created");
}).catch((err)=>{
    console.log(err );
    console.log("somthing worg in post");
})


export default Posts    


// // models/Posts.js
// import { DataTypes } from "sequelize";
// import sequelize from "../dbCongi/dbConnection.js";
// import soundVendorDetails from "./sound_info.js"; // Import soundVendorDetails to establish the relationship

// const Posts = sequelize.define("post", {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//     },
//     vendorId: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         references: {
//             model: soundVendorDetails,
//             key: "id",
//         },
//     },
//     title: {
//         type: DataTypes.STRING,
//     },
//     images: {
//         type: DataTypes.STRING,
//     },
// });

// soundVendorDetails.hasMany(Posts, { foreignKey: 'vendorId' });
//

// sequelize.sync().then(() => {
//     console.log("post table is created");
// }).catch((err) => {
//     console.log(err);
//     console.log("something went wrong in post");
// });

// export default Posts;
