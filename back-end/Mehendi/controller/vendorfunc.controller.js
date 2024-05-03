import VendorFunc from "../model/vendorfunc.model.js";
import xlsx from 'xlsx';
import Vendor from "../model/vendor.model.js";


export const signUp = (request,response,next)=>{
    Vendor.create({
            name:request.body.name,
            email:request.body.email,
            password:request.body.password,
            address:request.body.address,
            contact:request.body.contact

    }).then(result=>{
        return response.status(200).json({data:result.dataValues,message:"vendor signup success"});
        
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error:"Internal server error"});
    })

}

export const signIn = async (request,response,next)=>{
    let email  = request.body.email;
    let password = request.body.password;

    let vendor = await Vendor.findOne({where:{email:email},raw: true});
    if(vendor){
      if(Vendor.checkPassword(password,vendor.password))
      
        return response.status(200).json({message: "Sign In Success", vendor:vendor });
      return response.status(401).json({error: "Unauthorized vendor .." });  
    }
    else
     return response.status(401).json({error: "Unauthorized vendor..ye wla"});
}




export const addDress = (request,response,next)=>{

    // console.log("Hello body",request.body);

    let filename = request.file.originalname;
    console.log(request.file);
    let type = request.body.type;
    let title = request.body.title;
    let gender = request.body.gender;
    let size = request.body.size;
    let colour=request.body.colour;
    let price= request.body.price;
    let imageurl = "images/"+filename;
    
    // console.log("Hello file",imageurl);
    
    let vendor_id = request.body.vendor_id;
    VendorFunc.create({
        type,title,gender,size,colour,price,imageurl,vendor_id
    }).then(result=>{
        return response.status(200).json({data:result.dataValues,message:"dress added  successfull"});
        
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error:"Internal server error"});
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


export const viewAlldresses = (request,response,next)=>{
    VendorFunc.findAll().then((result)=>{
        return response.status(200).json({data:result, message:"view all dresses"});
    }).catch(err=>{
        console.log(err)
        return res.status(401).json({message:"Something went wrong"})
    }) 
}

export const viewByPrice = (request,response,next)=>{
    VendorFunc.findAll({where:{price:request.body.price}}).then((result)=>{
        return response.status(200).json({ message:"Here are the list of dress by price",data:result,});
        }).catch(err=>{
        console.log(err);
        return response.status(401).json({message:"internal server error"});
    })
}
export const viewByColour = (request, response, next)=>{
    VendorFunc.findAll({where:{colour:request.body.colour}}).then((result)=>{
        return response.status(200).json({message:"Here are the list of dress by colour ",data:result,});
    }).catch(err=>{
        console.log(err);
        return response.status(401).json({message:"internal server error"});
})
}