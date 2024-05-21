import { Result, validationResult } from 'express-validator';
import PhotoGrapherDetails from '../models/photoGrapherDetails.model.js';
import xlsx from 'xlsx';
import PhotoGrapherLogin from '../models/photoGrapherLogin.model.js';

import bcrypt from 'bcryptjs';

export const resetPassword = async (request, response, next) => {
    console.log('Request body:', request.body);
    try {
        const { email, newpassword } = request.body;

        if (!email || !newpassword) {
            return response.status(400).json({ message: "Email and new password are required" });
        }

        const gardenLogin = await PhotoGrapherLogin.findOne({ where: { email } });

        if (!gardenLogin) {
            return response.status(404).json({ message: "PhotographerLogin not found" });
        }

        const hashedPassword = await bcrypt.hash(newpassword, 10);

        const [affectedRows] = await PhotoGrapherLogin.update(
            { password: hashedPassword },
            { where: { email } }
        )

        if (affectedRows > 0) {
            return response.status(200).json({ message: "Profile Updated Successfully" });
        } else {
            return response.status(500).json({ error: "Failed to update profile" });
        }

    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: "Internal Server Error", err });
    }
};

export const signin = async (request, response, next) => {
    try {
        const { email, password } = request.body;

        const photographerObj = await PhotoGrapherLogin.findOne({ where: { email }, raw: true });

        if (photographerObj && PhotoGrapherLogin.checkPassword(password, photographerObj.password))
            return response.status(200).json({ message: "Sign In Success", data : photographerObj });

        return response.status(401).json({ error: "Unauthorized user" });
    } catch (err) {

        
        console.error(err);
        return response.status(500).json({ error: "Internal Server Error" });
    }
}
export const signup = async (request, response, next) => {
    // console.log(request.body);
   
        const { email, password } = request.body;

        await PhotoGrapherLogin.create({ email, password })
            .then((result) => {
                return response.status(200).json({ message: "SignUp Sucess...", data: result });
            }).catch(err => {
                if (err.parent.errno * 1 == 1062)
                    return response.status(401).json({ message: "Email is already registered...", Erro: (err.parent.errno*1) });
                return response.status(401).json({ message: "please enter correct details...", Error: err });
            })
    
}

export const updateProfile = async (request, response, next) => {
    try {
        const id = request.params.id;
        const { email, password } = request.body;

        const photographerLogin = await PhotoGrapherLogin.findByPk(id);
        if (!photographerLogin) {
            return response.status(404).json({ message: "photographerLogin not found" });
        }

        await PhotoGrapherLogin.update({ email, password }, {
            where: { id }
        });

        return response.status(200).json({ message: "Profile Updated Successfully" });
    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: "Internal Server Error", err });
    }
};


export const addInBulk = async (req, res, next) => {

    const workbook = xlsx.readFile('Products.xlsx');
    const sheet_name = workbook.SheetNames[0]; // Assuming you want to read the first sheet
    const sheet = workbook.Sheets[sheet_name];

    console.log(req.body);
    // Convert the sheet to JSON/
    const data = xlsx.utils.sheet_to_json(sheet);
    console.log(data);
    var i = 0;
    for (let item of data) {
        let title = item.title;
        let imageUrl = item.imageUrl;
        let price = item.price;
        let address = item.address;
        let rating = item.rating;
        let description = item.description;
        console.log(title + " " + imageUrl + " " + price + " " + address + " " + description + ' ' + rating)
    }
    try {
        for (let item of data) {
            let title = item.title;
            let imageUrl = item.imageUrl;
            let price = item.price;
            let address = item.address;
            let rating = item.rating;
            let description = item.description;

            await PhotoGrapherDetails.create({
                title, imageUrl, price, address, rating, description
            })
        }
        return res.status(200).json({ message: "product added successfully.." })
    } catch (err) {
        console.log(err);
        return res.status(501).json({ message: "Internal server error" })
    }
}

export const viewAllByCategory = (req, res, next) => {
    PhotoGrapherDetails.findAll().then(result => {
        return res.status(200).json({ message: "Photographer Data ", data: result })
    }).catch(err => {
        console.log(err);
        return res.status(401).json({ message: "Internal Server Error", data: err })
    });
}

export const viewProfile = async (request, response, next) => {
    try {
        const id = request.params.id;
        await PhotoGrapherDetails.findOne({ where: { id } })
            .then((result) => {
                return response.status(200).json({ message: "View Profile success...", data: result });
            }).catch(err => {
                return response.status(401).json({ error: "Unauthorized user", err });
            })

    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: "Internal Server Error", err });
    }
}

export const remove = async (request, response, next) => {
    try {
        let PhotoGrapherObj = await PhotoGrapherDetails.findOne({ where: { id: request.params.id * 1 } });
        if (!PhotoGrapherObj) {
            return response.status(404).json({ error: "Photographer not found" });
        }

        await PhotoGrapherDetails.destroy({ where: { id: PhotoGrapherObj.id } });

        return response.status(200).json({ message: "Item removed", removedItem: PhotoGrapherObj });
    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: "Internal Server Error" });
    }
}

export const updatePhotographer = async (request, response, next) => {
    try {
        const { id } = request.params;
        const { name, location, capacity, contactNo, rentalFee, imageUrl, description } = request.body;

        let PhotoGrapherObj = await PhotoGrapherDetails.findOne({ where: { id } });
        if (!PhotoGrapherObj) {
            return response.status(404).json({ error: "Photographer not found" });
        }

        const updatedPhotographer = await PhotoGrapherObj.update({
            name, location, capacity, contactNo, rentalFee, imageUrl, description
        });

        if (updatedPhotographer) {
            return response.status(200).json({ message: "Photographer updated successfully", data: updatedPhotographer });
        } else {
            return response.status(500).json({ error: "Failed to update Photographer" });
        }
    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: "Internhjshjdhsdjhshsjdhjsdhal Server Error" });
    }
}

export const add = async (request, response, next) => {
    console.log("ADD CALLED....");
    try {
        const { photographerId, name, contactNo, serviceCharge, description } = request.body;
        const filename = request.file.filename;
        const imageUrl = 'images/' + filename;

        const isNameExists = await PhotoGrapherDetails.findOne({ where: { name: name }, raw: true });
        // const isContactExists = await PhotoGrapherDetails.findOne({ where: { contactNo: contactNo }, raw: true });

        if (!isNameExists) {
            const createdPhotographer = await PhotoGrapherDetails.create({
                photographerId, name, contactNo, serviceCharge, imageUrl, description
            });
            return response.status(200).json({ message: "Photographer Details Added Success...", data: createdPhotographer });
        } else {
            return response.status(400).json({ message: "Photographer Details already exists." });
        }
    } catch (err) {
        console.log(err);
        return response.status(500).json({ error: "Internal Server Error...", err });
    }
};

export const viewAllPhotographer = async (request, response, next) => {
    try {
        const allPhotographers = await PhotoGrapherDetails.findAll();
        if (allPhotographers.length > 0)
            return response.status(200).json({ message: "View All Photographers success...", data: allPhotographers });
        return response.status(404).json({ message: "No Photographers found" });
    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: "Internal Server Error" });
    }
};


