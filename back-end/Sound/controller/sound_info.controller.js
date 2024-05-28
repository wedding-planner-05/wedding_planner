import SoundDetails from "../model/sound_info.js";
import { validationResult } from "express-validator";
import sound_vendor from "../model/sound.js";
import soundVendorDetails from "../model/sound_info.js";
import xlsx from "xlsx";
import { request, response } from "express";
import { review } from "../model/review.js";

export const addInBulkVendor = async (req, res, next) => {
  const workbook = xlsx.readFile("VendorSignInData.xlsx");
  const sheet_name = workbook.SheetNames[0]; // Assuming you want to read the first sheet
  const sheet = workbook.Sheets[sheet_name];

  // Convert the sheet to JSON/
  console.log("Resuest Body", req.body);
  const data = xlsx.utils.sheet_to_json(sheet);
  console.log("Data : ", data);

  try {
    for (let item of data) {
      let email = item.email;
      let password = item.password + "";
      await sound_vendor.create({
        email,
        password,
      });
    }
    return res
      .status(200)
      .json({ message: "Add In Bulk SignUp added successfully.." });
  } catch (err) {
    console.log(err);
    return res.status(501).json({ message: "Internal server error" });
  }
};

export const resetPassword = async (request, response, next) => {
  try {
    const { email, newpassword } = request.body;

    if (!email || !newpassword) {
      return response
        .status(400)
        .json({ message: "Email and new password are required" });
    }

    const vendor = await sound_vendor.findOne({ where: { email } });

    if (!vendor) {
      return response.status(404).json({ message: "Vendor not found" });
    }

    const hashedPassword = await bcrypt.hash(newpassword, 10);

    const [affectedRows] = await sound_vendor.update(
      { password: hashedPassword },
      { where: { email } }
    );

    if (affectedRows > 0) {
      return response
        .status(200)
        .json({ message: "Profile Updated Successfully" });
    } else {
      return response.status(500).json({ error: "Failed to update profile" });
    }
  } catch (err) {
    console.error(err);
    return response.status(500).json({ error: "Internal Server Error", err });
  }
};

export const signup = async (request, response, next) => {
  // console.log(request.body);

  const { email, password } = request.body;

  await sound_vendor
    .create({ email, password })
    .then((result) => {
      return response
        .status(200)
        .json({ message: "SignUp Sucess...", data: result });
    })
    .catch((err) => {
      if (err.parent.errno * 1 == 1062)
        return response.status(401).json({
          message: "Email is already registered...",
          Erro: err.parent.errno * 1,
        });
      return response
        .status(401)
        .json({ message: "please enter correct details...", Error: err });
    });
};

export const signin = async (request, response, next) => {
  try {
    let errors = validationResult(request);

    if (!errors.isEmpty())
      return response.status(500).json({ error: errors.array() });

    let user = await sound_vendor.findOne({
      where: { email: request.body.email },
      raw: true,
    });
    let encryptedPassword = user.password;
    let originPassword = request.body.password;

    if (user && sound_vendor.checkPassword(originPassword, encryptedPassword))
      return response
        .status(200)
        .json({ message: "User Login Successful", data: user });
    return response.status(401).json({ error: "enter valid password" });
  } catch (error) {
    console.error("Error while signing up:", error);
    response.status(500).json({ error: "Internal server error" });
  }
};

// export const upDate = (request, response, next) => {
//   // if (request.body.email.includes("@gmail.com")) {
//     sound_vendor
//       .update(request.body, { where: { id: request.body.id } })
//       .then((res) => {
//         console.log(res);
//         if (res)
//           return response.status(200).json({ data: "Data update successful" });
//         return response.status(200).json({ data: "Data updation failed" });
//       })
//       .catch((err) => {
//         console.log(err);
//         if (err.parent.errno == 1062)
//           return response.status(200).json({ data: "user already registerd" });
//         return response.status(200).json({ data: "somthing went wront" });
//       });

// };

export const update = async (request, response, next) => {
  try {
    const { email, newpassword } = request.body;

    if (!email || !newpassword) {
      return response
        .status(400)
        .json({ message: "Email and new password are required" });
    }

    const vendor = await sound_vendor.findOne({ where: { email } });

    if (!vendor) {
      return response.status(404).json({ message: "Vendor not found" });
    }

    const hashedPassword = await bcrypt.hash(newpassword, 10);

    const [affectedRows] = await sound_vendor.update(
      { password: hashedPassword },
      { where: { email } }
    );

    if (affectedRows > 0) {
      return response
        .status(200)
        .json({ message: "Profile Updated Successfully" });
    } else {
      return response.status(500).json({ error: "Failed to update profile" });
    }
  } catch (err) {
    console.error(err);
    return response.status(500).json({ error: "Internal Server Error", err });
  }
};

export const deleteSound = async (request, response, next) => {
  try {
    const deletedVendor = await sound_vendor.destroy({ where: request.body });
    console.log(deletedVendor);
    if (!deletedVendor)
      return response.status(401).json({ message: "vendor not found" });

    return response.status(200).json({ message: "vendor delete success" });
  } catch (error) {
    response.status(500).json({ message: "something went wrong" });
  }
};

export const createProfile = (request, response, next) => {
  let errors = validationResult(request);
  console.log("data from server", request.body);

  if (!errors.isEmpty())
    return response.status(500).json({ error: errors.array() });

  console.log("In create profile");
  let filename = request.file.filename; //images.png
  let id = request.body.id;
  let soundId = request.body.soundId;
  let name = request.body.name;
  let imageUrl = "images/" + filename;
  let serviceCharge = request.body.serviceCharge;
  let address = request.body.address;
  let contactNo = request.body.contactNo;
  let description = request.body.description;

  SoundDetails.create({
    id,
    soundId,
    name,
    imageUrl,
    serviceCharge,
    address,
    contactNo,
    description,
  })
    .then((res) => {
      if (res._options.isNewRecord)
        return response.status(200).json({ data: res });
    })
    .catch((err) => {
      console.log(err);
      return response.status(401).json({ error: err });
    });
};

export const viewProfile = async (request, response, next) => {
  try {
    const id = parseInt(request.params.id, 10);
    if (isNaN(id)) {
      return response.status(400).json({ error: "Invalid ID format" });
    }
    console.log(id);
    const soundobj = await soundVendorDetails.findOne({
      where: { id: id },
      raw: true,
    });
    if (soundobj) {
      return response
        .status(200)
        .json({ message: "View Profile success...", data: soundobj });
    } else {
      return response.status(404).json({ error: "Garden not found" });
    }
  } catch (err) {
    console.error(err);
    return response.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateDetails = (request, response, next) => {
  let errors = validationResult(request);
  if (!errors.isEmpty())
    return response.status(500).json({ error: errors.array() });

  console.log("Inside disable");
  SoundDetails.update(request.body, { where: { id: request.body.id } })
    .then((res) => {
      if (res)
        return response
          .status(200)
          .json({ message: "account active success " });
      return response.status(200).json({ status: "account disable success" });
    })
    .catch((err) => {
      console.log(err);
      return response
        .status(401)
        .json({ message: "internal server error", error: err });
    });
};
// export const addDressInBulk = async (req, res, next) => {

//     const workbook = xlsx.readFile('products.xlsx');
//     const sheet_name = workbook.SheetNames[0]; // Assuming you want to read the first sheet
//     const sheet = workbook.Sheets[sheet_name];
//     console.log("sheet name : "+sheet);
//     console.log(req.body);
//     // Convert the sheet to JSON
//     const data = xlsx.utils.sheet_to_json(sheet);
//     console.log(data);
//     var i = 0;
//     for (let item of data) {
//         let name = item.name;
//         let imageUrl = item.imageUrl;
//         let serviceCharge = item.serviceCharge;
//         let address = item.address;
//         let rating= item.rating;
//         let description= item.description;
//         let contactno = item.contactno;

//         console.log(name + " " + imageUrl + " " + serviceCharge + " " + address  + " " +  description+ " " + rating + " " + contactno);
//     }
//     try {
//         for (let item of data) {
//             let name = item.name;
//             let imageUrl = item.imageUrl;
//             let serviceCharge = item.serviceCharge;
//             let address = item.address;
//             let rating = item.rating;
//             let description = item.description;
//             let contactno = item.contactno;

//             console.log(name + " " + imageUrl + " " + serviceCharge + " " + address + " " + description + " " + rating + " " + contactno);

//             await VendorFunc.create({
//                 name, imageUrl, serviceCharge, address, rating, description, contactno,
//             })
//         }
//         return res.status(200).json({ message: "product added successfully.." })
//     } catch (err) {
//         console.log(err);
//         return res.status(501).json({ message: "Internal server error" })
//         }
//     }

export const viewAllVendors = async (request, response, next) => {
  try {
    const allSoundVendors = await SoundDetails.findAll();
    if (allSoundVendors)
      return response.status(200).json({ data: allSoundVendors });
    return response.status(401).json({ error: "no vendors found" });
  } catch (error) {
    console.log(error);
  }
};

export const viewProfiles = async (request, response, next) => {
  try {
    const id = parseInt(request.params.id, 10);
    if (isNaN(id)) {
      return response.status(400).json({ error: "Invalid ID format" });
    }
    console.log(id);
    const SoundObj = await soundVendorDetails.findOne({
      where: { soundId: id },
      raw: true,
    });
    if (gardenobj) {
      return response
        .status(200)
        .json({ message: "View Profile success...", data: SoundObj });
    } else {
      return response.status(404).json({ error: "Garden not found" });
    }
  } catch (err) {
    console.error(err);
    return response.status(500).json({ error: "Internal Server Error" });
  }
};

export const reviews = async (request, response, next) => {
  const { vendorId, userId, rating,name, comment } = request.body;

  review.create({ vendorId, userId, rating,name, comment })
    .then((result) => {
      return response.status(200).json({ data: result });
    })
    .catch((error) => {
      return response.status(501).json({ data: error });
    });
};


export const reviewData = (request,response,next)=>{
  const { vendorId } = request.params;
  review.findAll({ where: { vendorId } })
    .then((result) => {
      return response.send({ data: result });
    })
    .catch((error) => {
      return response.send({ error: error });
    });
}