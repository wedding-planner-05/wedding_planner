import sequelize from "../dbCongi/dbConnection.js";
import { DataTypes } from "sequelize";
import soundVendorDetails from "./sound_info.js";

export const review = sequelize.define("review", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  vendorId:{
    type: DataTypes.INTEGER,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
},{
    indexes:[{
        unique:true,
        fields:['id','userId']
    }]
  });

review.belongsTo(soundVendorDetails, { // Pass the actual model instead of a string
  foreignKey: "vendorId", // Make sure this key is the one used in review to reference soundVendorDetails
  targetKey: "id",
});

sequelize
  .sync()
  .then(() => {
    console.log("review table create successful");
  })
  .catch((error) => {
    console.error("something went wrong in review table", error);
  });
