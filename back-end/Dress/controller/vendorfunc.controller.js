import { response } from "express";
import VendorFunc from "../model/vendorfunc.model.js";

import xlsx from 'xlsx';
import Vendor from "../model/vendor.model.js";
import bcrypt from "bcryptjs";

// export const signUp = (request,response,next)=>{
//     Vendor.create({
//             email:request.body.email,
//             password:request.body.password,

//     }).then(result=>{
//         return response.status(200).json({data:result.dataValues,message:"vendor signup success"});

//     }).catch(err=>{
//         console.log(err);
//         return response.status(500).json({error:"Internal server error"});
//     })

// }

export const signUp = async (request, response, next) => {
    // console.log(request.body);

    const { email, password } = request.body;

    await Vendor.create({ email, password })
        .then((result) => {
            return response.status(200).json({ message: "SignUp Sucess...", data: result });
        }).catch(err => {
            if (err.parent.errno * 1 == 1062)
                return response.status(401).json({ message: "Email is already registered...", Erro: (err.parent.errno * 1) });
            return response.status(401).json({ message: "please enter correct details...", Error: err });
        })
}

export const signIn = async (request, response, next) => {
    let email = request.body.email;
    let password = request.body.password;

    let vendor = await Vendor.findOne({ where: { email: email }, raw: true });
    if (vendor) {
        if (Vendor.checkPassword(password, vendor.password))

            return response.status(200).json({ message: "Sign In Success", data: vendor });
        return response.status(401).json({ error: "Unauthorized vendor .." });
    }
    else
        return response.status(401).json({ error: "Unauthorized vendor..ye wla" });
}

export const resetPassword = async (request, response, next) => {
    try {
        const { email, newpassword } = request.body;

        if (!email || !newpassword) {
            return response.status(400).json({ message: "Email and new password are required" });
        }

        const vendor = await Vendor.findOne({ where: { email } });

        if (!vendor) {
            return response.status(404).json({ message: "Vendor not found" });
        }

        const hashedPassword = await bcrypt.hash(newpassword, 10);

        const [affectedRows] = await Vendor.update(
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

export const addDress = (request, response, next) => {

    console.log("Hello body", request.body);

    let filename = request.file.filename;
    // console.log(filename);
    let id = request.body.id
    let name = request.body.name;
    let type = request.body.type;
    let title = request.body.title;
    let address = request.body.address
    let serviceCharge = request.body.servicecharge;
    let imageUrl = "images/" + filename;
    let rating = request.body.rating;
    let description = request.body.description;
    let contactno = request.body.contactno;
    // console.log("Hello file",imageurl);

    let vendor_id = request.body.vendor_id;
    VendorFunc.create({ id, name, type, title, address, serviceCharge, imageUrl, rating, description, contactno }).then(result => {
        return response.status(200).json({ data: result.dataValues, message: "dress added  successfull" });

    }).catch(err => {
        console.log(err);
        return response.status(500).json({ error: "Internal server error" });
    })
}

// export const addDressInBulk = (request,response,next)=>{
//     const workbook = xlxs.readFile("DressData.xlxs");
//     let filename = request.file.originalname;
//     const sheet_name = workbook.SheetNames[0]; // Assuming you want to read the first sheet
//     const sheet = workbook.Sheets[sheet_name];




//     console.log(request.body);
//     const data = xlsx.utils.sheet_to_json(sheet);
//     console.log(data);

//     var  i =0;
//     for(let item of data){

//         let name= item.name;
//         let Address = item.Address;
//         let serviceCharge = item.serviceCharge;
//         let imageUrl= item.imageUrl;
//         // let colour= item.name;
//         // let price= item.name;
//         // let imageurl = item.imageUrl;
//           console.log(name +  " " + Address + "" + serviceCharge + "" + imageUrl );
//     }

export const addDressInBulk = async (req, res, next) => {

    const workbook = xlsx.readFile('products.xlsx');
    const sheet_name = workbook.SheetNames[0]; // Assuming you want to read the first sheet
    const sheet = workbook.Sheets[sheet_name];

    console.log(req.body);
    // Convert the sheet to JSON
    const data = xlsx.utils.sheet_to_json(sheet);
    console.log(data);
    var i = 0;
    // for (let item of data) {
    //     let name = item.name;
    //     let imageUrl = item.imageUrl;
    //     let serviceCharge = item.serviceCharge;
    //     let address = item.address;
    //     let rating= item.rating;
    //     let description= item.description;
    //     let contactno = item.contactno;


    //     console.log(name + " " + imageUrl + " " + serviceCharge + " " + address  + " " +  description+ " " + rating + " " + contactno);
    // }
    try {
        for (let item of data) {
            let name = item.name;
            let imageUrl = item.imageUrl;
            let serviceCharge = item.serviceCharge;
            let address = item.address;
            let rating = item.rating;
            let description = item.description;
            let contactno = item.contactno;

            console.log(name + " " + imageUrl + " " + serviceCharge + " " + address + " " + description + " " + rating + " " + contactno);

            await VendorFunc.create({
                name, imageUrl, serviceCharge, address, rating, description, contactno,
            })
        }
        return res.status(200).json({ message: "product added successfully.." })
    } catch (err) {
        console.log(err);
        return res.status(501).json({ message: "Internal server error" })
    }
}

//     let vendor_id = request.body.vendor_id;
//     VendorFunc.create({
//         type,title,gender,size,colour,price,imageurl,vendor_id
//     }).then(result=>{
//         return response.status(200).json({data:result.dataValues,message:"dress added  successfull"});

//     }).catch(err=>{
//         console.log(err);
//         return response.status(500).json({error:"Internal server error"});
//     })


export const viewAlldresses = (request, response, next) => {
    VendorFunc.findAll().then((result) => {
        console.log("called..")
        return response.status(200).json({ data: result, message: "view all dresses" });
    }).catch(err => {
        console.log(err)
        return res.status(401).json({ message: "Something went wrong" })
    })
}

export const viewByPrice = (request, response, next) => {
    VendorFunc.findAll({ where: { price: request.body.price } }).then((result) => {
        return response.status(200).json({ message: "Here are the list of dress by price", data: result, });
    }).catch(err => {
        console.log(err);
        return response.status(401).json({ message: "internal server error" });
    })
}
export const viewByColour = (request, response, next) => {
    VendorFunc.findAll({ where: { colour: request.body.colour } }).then((result) => {
        return response.status(200).json({ message: "Here are the list of dress by colour ", data: result, });
    }).catch(err => {
        console.log(err);
        return response.status(401).json({ message: "internal server error" });
    })
}
export const addInBulkVendnor = async (req, res, next) => {

    const workbook = xlsx.readFile('VendorSignInData.xlsx');
    const sheet_name = workbook.SheetNames[0]; // Assuming you want to read the first sheet
    const sheet = workbook.Sheets[sheet_name];

    // Convert the sheet to JSON/
    console.log("Resuest Body", req.body);
    const data = xlsx.utils.sheet_to_json(sheet);
    console.log("Data : ", data);

    try {
        for (let item of data) {
            let email=item.email;
            let password=item.password+"";
            await Vendor.create({
                email,password
            })
        }
        return res.status(200).json({ message: "Add In Bulk SignUp added successfully.." })
    } catch (err) {
        console.log(err);
        return res.status(501).json({ message: "Internal server error" })
    }
}

export const viewprofile =  async (request, response, next) => {
    try {
        const id = parseInt(request.params.id, 10);
        if (isNaN(id)) {
            return response.status(400).json({ error: "Invalid ID format" });
        }
        console.log(id);
        const dressobj = await VendorFunc.findOne({ where: { id: id }, raw: true });
        if (dressobj) {
            return response.status(200).json({ message: "View Profile success...", data: dressobj });

        } else {
            return response.status(404).json({ error: "Garden not found" });
        }
    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: "Internal Server Error" });
    }
}