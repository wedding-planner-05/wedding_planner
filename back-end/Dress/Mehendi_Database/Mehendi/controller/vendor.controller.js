
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



