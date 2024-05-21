import SoundDetails from "../model/sound_info.js";
import { validationResult } from "express-validator";
import sound_vendor from "../model/sound.js";
// export const signUp = (request, response, next) => {
//     const errors = validationResult(request);
//     if (!errors.isEmpty())
//       return response.status(401).json({ error: errors.array() });
   
//       sound_vendor.create(request.body).then((res) => {
   
//         let Token = jwt.sign(request.body,'vendorToken') ;
  
//         return response.status(200).json({status: "User SignUp success",Token,data : res});
//       })
//       .catch((err) => {
//         if (err.parent.errno === 1062)
//           return response.status(200).json({status: "User already exist.." });
//         return response.status(200).json({status: "Something went wrong" ,err});
//       });
//   };
  export const signup = async (request, response, next) => {
    // console.log(request.body);
   
        const { email, password } = request.body;

        await sound_vendor.create({ email, password })
            .then((result) => {
                return response.status(200).json({ message: "SignUp Sucess...", data: result });
            }).catch(err => {
                if (err.parent.errno * 1 == 1062)
                    return response.status(401).json({ message: "Email is already registered...", Erro: (err.parent.errno*1) });
                return response.status(401).json({ message: "please enter correct details...", Error: err });
            })
}

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
      return response.status(200).json({ message: "User Login Successful",data : user });
    return response.status(401).json({ error: "enter valid password" });
    
  } catch (error) {
    console.error("Error while signing up:", error);
    res.status(500).json({ error: "Internal server error" });
}
  }
  
  export const upDate = (request, response, next) => {
    // if (request.body.email.includes("@gmail.com")) {
      sound_vendor
        .update(request.body, { where: { id: request.body.id } })
        .then((res) => {
          console.log(res);
          if (res)
            return response.status(200).json({ data: "Data update successful" });
          return response.status(200).json({ data: "Data updation failed" });
        })
        .catch((err) => {
          console.log(err);
          if (err.parent.errno == 1062)
            return response.status(200).json({ data: "user already registerd" });
          return response.status(200).json({ data: "somthing went wront" });
        });
      
  };
  
  export const deleteSound = async(request,response,next)=>{
    try {
        const deletedVendor = await sound_vendor.destroy({where : request.body})
        console.log(deletedVendor);
        if(!deletedVendor)
            return response.status(401).json({message:"vendor not found"}) ;
  
        return response.status(200).json({message:"vendor delete success"}) ;
    } catch (error) {
          response.status(500).json({message : "something went wrong"}) ;
    }      
     
  }

export const createProfile = (request,response,next)=>{
    let errors = validationResult(request) ;
    
    if(!errors.isEmpty())
        return response.status(500).json({error :errors.array()})

    console.log("In create profile");
    let filename = request.file.filename ; //images.png
    let vendor_id = request.body.vendor_id ;
    let type =request.body.type ;
    let image = "images/"+filename ;
    let charges = request.body.charges ;
    let contact = request.body.contact ;
    let description = request.body.description ;
    let status = request.body.status ;

    SoundDetails.create({vendor_id,type,image,charges,contact,description,status})
    .then(res=>{
        if(res._options.isNewRecord)    
                return response.status(200).json({data : res}) ;
      })
    .catch(err=>{   
        console.log(err);
        return response.status(401).json({error : err}) ;
    });
}

export const viewProfile = (request,response,next)=>{

    SoundDetails.findOne(request.body,{raw: true}).then(res=>{
        console.log(res);
        return response.status(200).json({data : res})
    }).catch((error)=>{
        return response.status(404).json({err : error})
    })
}

export const updateDetails = (request,response,next)=>{

    let errors = validationResult(request) ;
    if(!errors.isEmpty())
        return response.status(500).json({error :errors.array()}) ;

    console.log("Inside disable");
    SoundDetails.update(request.body,{where : {id : request.body.id}}).then(res=>{
        if(res)
            return response.status(200).json({message : "account active success "})
        return response.status(200).json({status : "account disable success"}) ;
    }).catch(err=>{
        console.log(err);
        return response.status(401).json({message : "internal server error" , error : err}) ;
    }) ;
}
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

export const viewAllVendors =async (request,response,next)=>{
    try {
        const allSoundVendors = await SoundDetails.findAll()    
        if(allSoundVendors)
            return response.status(200).json({data:allSoundVendors})
        return response.status(401).json({error:"no vendors found"})
        }
     catch (error) {
        console.log(error);
    }
}