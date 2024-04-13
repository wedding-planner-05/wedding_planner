import { validationResult } from 'express-validator';
import Admin from '../models/admin.model.js';
import User from '../models/user.model.js';

export const signin = async (request, response, next) => {
    try {
        const { email, password } = request.body;

        const obj = await Admin.findOne({ where: { email }, raw: true });

        if (obj)
            return response.status(200).json({ message: "Sign In Success", obj });

        return response.status(401).json({ error: "Unauthorized user" });
    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: "Internal Server Error" });
    }
}

export const deleteVendor = async (request, response, next) => {
    try {
        const { email, type } = request.body;
        if (type == 'photographer') {
            const photoGrapherObj = await PhotoGrapher.findOne({ where: { email }, raw: true });
            if (!photoGrapherObj)
                return response.status(401).json({ error: "vendor not exists!, unauthorized vendor" });
            else {
                await PhotoGrapher.destroy({ where: { email }, raw: true })
                return response.status(200).json({ message: "PhotoGrapher Vendor deleted sucess..", data: photoGrapherObj });
            }
        } else if (type == 'garden') {
            const gardenObj = await GardenDetails.findOne({ where: { email }, raw: true });
            if (!gardenObj)
                return response.status(401).json({ error: "vendor not exists, Unauthorized vendor" });
            else {
                await GardenDetails.destroy({ where: { email }, raw: true })
                return response.status(200).json({ message: "Garden Vendor deleted sucess..", data: gardenObj });
            }
        } else {
            return response.status(401).json({ error: "Invalid type of vendor" });
        }

    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: "Internal Server Error" });
    }
}
export const update = async (request, response, next) => {
    try {
        const { id } = request.params;
        const { name, email, password } = request.body;

        let adminObj = await Admin.findOne({ where: { id } });
        if (!adminObj) {
            return response.status(404).json({ error: "Admin does not Exists" });
        }

        const updatedObj = await adminObj.update({
            name, email, password
        });

        if (updatedObj) {
            return response.status(200).json({ message: "Admin details updated successfully", data: updatedObj });
        } else {
            return response.status(500).json({ error: "Failed to update garden" });
        }
    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: "Internal Server Error" });
    }
}
export const deleteUser = async (request, response, next) => {
    try {
        const email = request.body.email;

        const userObj = await User.findOne({ where: { email }, raw: true });
        if (!userObj)
            return response.status(401).json({ error: "User not exists!, unauthorized vendor" });
        else {
            await User.destroy({ where: { email }, raw: true })
            return response.status(200).json({ message: "User deleted sucess..", data: userObj });
        }
    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: "Internal Server Error" });
    }
}

const viewList = async (tableName, response) => {
    try {
        const dataList = await tableName.findAll({ raw: true });
        return response.status(200).json({ data: dataList });
    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: "Internal Server Error" });
    }
}

export const viewUserList = async (request, response, next) => {
    return await viewList(User, response);
}

export const viewVendorList = async (request, response, next) => {
    const { type } = request.body;
    let tableName;
    if (type === 'photographer') {
        tableName = PhotoGrapher;
    } else if (type === 'garden') {
        tableName = GardenDetails;
    } else {
        return response.status(401).json({ error: "Invalid type of vendor" });
    }
    return await viewList(tableName, response);
}