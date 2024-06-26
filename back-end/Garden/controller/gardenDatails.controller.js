import { request, response } from 'express';
import GardenDetails from '../model/gardenDetails.model.js';
import xlsx from 'xlsx'
import GardenLogin from '../model/gardenLogin.model.js';
import bcrypt from 'bcryptjs';

export const addInBulkVendor = async (req, res, next) => {

    const workbook = xlsx.readFile('VendorSignInData.xlsx');
    const sheet_name = workbook.SheetNames[0]; // Assuming you want to read the first sheet
    const sheet = workbook.Sheets[sheet_name];

    // Convert the sheet to JSON/
    console.log("Resuest Body",req.body);
    const data = xlsx.utils.sheet_to_json(sheet);
    console.log("Data : ",data);

    try {
        for (let item of data) {
            let email=item.email;
            let password=item.password+'';
            await GardenLogin.create({
                email,password
            })
        }
        return res.status(200).json({ message: "Add In Bulk SignUp added successfully.." })
    } catch (err) {
        console.log(err);
        return res.status(501).json({ message: "Internal server error" })
    }
}

export const signin = async (request, response, next) => {
    try {
        const { email, password } = request.body;

        const gardenobj = await GardenLogin.findOne({ where: { email }, raw: true });

        if (gardenobj && GardenLogin.checkPassword(password, gardenobj.password))
            return response.status(201).json({ message: "Sign In Success", data: gardenobj });


        return response.status(401).json({ error: "Unauthorized user" });
    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: "Internal Server Error" });
    }
}
export const signup = async (request, response, next) => {
    // console.log(request.body);
    try {
        const { email, password } = request.body;

        await GardenLogin.create({ email, password })
            .then((result) => {
                return response.status(201).json({ message: "SignUp Sucess...", data: result });
            }).catch(err => {
                if (err.parent.errno * 1 == 1062)
                    return response.status(401).json({ message: "Email is already registered...", Erro: (err.parent.errno * 1) });
                return response.status(401).json({ message: "please enter correct details...", Error: err });
            })
    } catch (err) {
        // console.error("Hello Satish : " + err.parent.errno);
        console.log(err);
        return response.status(500).json({ error: "Internal Server Error...", err });
    }
}


export const resetPassword = async (request, response, next) => {
    try {
        const { email, newpassword } = request.body;

        if (!email || !newpassword) {
            return response.status(400).json({ message: "Email and new password are required" });
        }

        const gardenLogin = await GardenLogin.findOne({ where: { email } });

        if (!gardenLogin) {
            return response.status(404).json({ message: "GardenLogin not found" });
        }

        const hashedPassword = await bcrypt.hash(newpassword, 10);

        const [affectedRows] = await GardenLogin.update(
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

export const addInBulk = async (req, res, next) => {

    const workbook = xlsx.readFile('GardenData.xlsx');
    const sheet_name = workbook.SheetNames[0]; // Assuming you want to read the first sheet
    const sheet = workbook.Sheets[sheet_name];

    // Convert the sheet to JSON/
    console.log(req.body);
    const data = xlsx.utils.sheet_to_json(sheet);
    console.log(data);

    try {
        for (let item of data) {
        
            let {gardenId,title,location,capacity,contactNo,price,imageUrl,description,rating}=item;

            await GardenDetails.create({
                gardenId,title,location,capacity,contactNo,price,imageUrl,description,rating
            })
        }
        return res.status(200).json({ message: "Garden's Details added successfully.." })
    } catch (err) {
        console.log(err);
        return res.status(501).json({ message: "Internal server error" })
    }
}

export const viewAllInBulk = (req, res, next) => {
    GardenDetails.findAll().then(result => {
        return res.status(200).json({ message: "Garden Data ", data: result })
    }).catch(err => {
        console.log(err);
        return res.status(401).json({ message: "Internal Server Error", data: err })
    });
}


export const viewProfile = async (request, response, next) => {
    try {
        const id = parseInt(request.params.id, 10);
        if (isNaN(id)) {
            return response.status(400).json({ error: "Invalid ID format" });
        }
        console.log(id);
        const gardenobj = await GardenDetails.findOne({ where: { gardenId: id }, raw: true });
        if (gardenobj) {
            return response.status(200).json({ message: "View Profile success...", data: gardenobj });
        } else {
            return response.status(404).json({ error: "Garden not found" });
        }
    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: "Internal Server Error" });
    }
};


export const remove = async (request, response, next) => {
    try {
        let gardenobj = await GardenDetails.findOne({ where: { id: request.params.id * 1 } });
        if (!gardenobj) {
            return response.status(404).json({ error: "Garden not found" });
        }

        await GardenDetails.destroy({ where: { id: gardenobj.id } });

        return response.status(200).json({ message: "Item removed", removedItem: gardenobj });
    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: "Internal Server Error" });
    }
}

export const updateGarden = async (request, response, next) => {
    try {
        const { id } = request.params;
        const { name, location, capacity, contactNo, rentalFee, imageUrl, description } = request.body;

        let gardenobj = await GardenDetails.findOne({ where: { id } });
        if (!gardenobj) {
            return response.status(404).json({ error: "Garden not found" });
        }

        const updatedGarden = await gardenobj.update({
            name, location, capacity, contactNo, rentalFee, imageUrl, description
        });

        if (updatedGarden) {
            return response.status(200).json({ message: "Garden updated successfully", data: updatedGarden });
        } else {
            return response.status(500).json({ error: "Failed to update garden" });
        }
    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: "Internal Server Error" });
    }
}

export const createProfile = async (request, response, next) => {
    console.log("7777777777777777777777777777777777777777777777777777777");
    console.log(request.body);
    try {
        const { gardenId, name, location, contactNo, price, description } = request.body;
        const filename = request.file.filename;
        const imageUrl = 'images/' + filename;
        const title = name

        // console.log(id,imageUrl , name , location , contactNo);
        // const isNameExists = await GardenDetails.findOne({ where: { name: name }, raw: true });
        // const isContactExists = await GardenDetails.findOne({ where: { contactNo: contactNo }, raw: true });

        // if (!isNameExists && !isContactExists) {
            // } else {
            //     return response.status(400).json({ message: "Garden Details already exists." });
            // }
            const createdGarden = await GardenDetails.create({gardenId, title, location, contactNo, price, imageUrl, description});
            console.log('hello',createdGarden);
            if(createdGarden)
                console.log(createdGarden);
                return response.status(200).json({ message: "Garden Details Added Success...", data: createdGarden });
            } 
            catch (err) {
                console.log(err);
                return response.status(500).json({ error: "Internal Server Error...", err });
            }
};

export const viewAllGarden = async (request, response, next) => {
    try {
        const allGardens = await GardenDetails.findAll();
        if (allGardens.length > 0)
            return response.status(200).json({ message: "View All Gardens success...", data: allGardens });
        return response.status(404).json({ message: "No gardens found" });
    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: "Internal Server Error" });
    }
};