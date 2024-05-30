import { response } from 'express';
import User from '../model/user.model.js';
export const signUp = (request,response,next)=>{
    
    User.create({
        name: request.body.name,
        email: request.body.email,
        password: request.body.password,
        contactno:request.body.contactno,
        address : request.body.address
      


    }).then(result=>{
        console.log(request);
        return response.status(200).json({data: result.dataValues, message: "User created.."});
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error: "Internal Server Error.."});
    })
}

export const signIn = async (request,response,next)=>{
    let email  = request.body.email;
    let password = request.body.password;

    let user = await User.findOne({where:{email:email},raw: true});
    if(user){
      if(User.checkPassword(password,user.password))
        return response.status(200).json({message: "Sign In Success", user: user});
      return response.status(401).json({error: "Unauthorized user"});  
    }
    else
     return response.status(500).json({error: "Internal server error in sign in"});
}


export const update = async(request, response, next)=>{
    let id= request.body.id;
    let name  = request.body.name;
    let email = request.body.email;
    let password = request.body.password;
    let contactno = request.body.contactno;
    let address = request.body.address;

    User.update({
        name, email,password,contactno,address
    },{where:{id}}).then( result=>{
        return response.status(200).json({data:result, message:"Data updated sucessfully"});
        
    
        
    }).catch(err=>{
        console.log(err)
        return response.status(500).json({error : "Internal server error in update"});
    });

}


export const removeUser = async(request,response,next)=>{
    let id = request.body.id;
    User.destroy({

    },{where:{id}}).then(()=>{
        return response.status(200).json({message:"User removed sucessfully"});

    }).catch(()=>{
        
        return response.status(500).json({message:"something went wrong"})
    });
}
