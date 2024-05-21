import { request, response } from 'express';
import GardenDetails from '../model/gardenDetails.model.js';
import xlsx from 'xlsx'
import GardenLogin from '../model/gardenLogin.model.js';
import bcrypt from 'bcryptjs';

export const signin = async (request, response, next) => {
    try {
        const { email, password } = request.body;

        const gardenobj = await GardenLogin.findOne({ where: { email }, raw: true });

        if (gardenobj && GardenLogin.checkPassword(password, gardenobj.password))
            return response.status(201).json({ message: "Sign In Success", data : gardenobj });

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
                    return response.status(401).json({ message: "Email is already registered...", Erro: (err.parent.errno*1) });
                return response.status(401).json({ message: "please enter correct details...", Error: err });
            })
    } catch (err) {
        // console.error("Hello Satish : " + err.parent.errno);
        console.log(err);
        return response.status(500).json({ error: "Internal Server Error...", err });
    }
}

// export const updateProfile = async (request, response, next) => {
//     try {
//         // const id = request.params.id;
//         const { email, newpassword } = request.body;

//         const gardenLogin = await GardenLogin.findOne({ where: { email }, raw: true });

//         if (!gardenLogin) {
//             return response.status(404).json({ message: "GardenLogin not found" });
//         }

//         const updateObj=await GardenLogin.update({ newpassword }
//             , { where: { email } }
//         )
//         return response.status(200).json({ message: "Profile Updated Successfully",data:updateObj});

//     } catch (err) {
//         console.error(err);
//         return response.status(500).json({ error: "Internal Server Error", err });
//     }
// };

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

            await GardenDetails.create({
                title, imageUrl, price, address, rating, description
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
        const id = request.params.id;
        const gardenobj = await GardenDetails.findOne({ where: { id } });
        if (gardenobj)
            return response.status(200).json({ message: "View Profile success...", gardenobj });
        return response.status(401).json({ error: "Unauthorized user" });
    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: "Internal Server Error" });
    }
}

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

export const add = async (request, response, next) => {
    console.log("ADD CALLED....");
    try {
        const { gardenId, name, location, capacity, contactNo, rentalFee, description } = request.body;
        const filename = request.file.filename;
        const imageUrl = 'images/' + filename;

        const isNameExists = await GardenDetails.findOne({ where: { name: name }, raw: true });
        const isContactExists = await GardenDetails.findOne({ where: { contactNo: contactNo }, raw: true });

        if (!isNameExists && !isContactExists) {
            const createdGarden = await GardenDetails.create({
                gardenId, name, location, capacity, contactNo, rentalFee, imageUrl, description
            });
            return response.status(200).json({ message: "Garden Details Added Success...", data: createdGarden });
        } else {
            return response.status(400).json({ message: "Garden Details already exists." });
        }
    } catch (err) {
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


