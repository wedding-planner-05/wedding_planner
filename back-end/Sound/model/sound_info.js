import { DataTypes } from "sequelize";
import sequelize from "../dbCongi/dbConnection.js";
import { review } from "./review.js";
import { ratingCount } from "../controller/sound_info.controller.js";

const soundVendorDetails = sequelize.define("sound_vendor_details", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
 
  },
  vendorId:{
    allowNull:false,
    type: DataTypes.INTEGER,
    references: {
        model: "sound_vendors",
        key: "id"
      }
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'sound'
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false
  },
  serviceCharge: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  rating:{
    type: DataTypes.FLOAT, 
    allowNull: true,
    defaultValue: 2.0 
  },
  contactNo: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

soundVendorDetails.hasMany(review, { foreignKey: 'vendorId' });
review.belongsTo(soundVendorDetails, { foreignKey: 'vendorId' });

sequelize.sync().then(() => {
  console.log("soundVendorDetails table created successfully");
}).catch((error) => {
  console.error("something went wrong in soundVendorDetails table", error);
});

export default soundVendorDetails;

