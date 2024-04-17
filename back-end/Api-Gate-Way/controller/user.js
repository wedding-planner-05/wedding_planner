import { User } from "../model/user.model.js";
console.log('in user sign in');

export const signin = async (request, response, next) => {
  try {
      const { email, password } = request.body;
        // console.log(request.body);
      const userObj = await User?.findOne({ where: { email }, raw: true });
        const encryptedPassword = userObj.password
        
      if(userObj){
        if (User.checkpassword(password,encryptedPassword)) 
            return response.status(200).json({ message: "Sign In Success", userObj });
        return response.status(401).json({message:"password is wrong"})
      }
       else {
        await User.create({
          email,
          password,
        })
          .then((result) => { 
            return response
              .status(200)
              .json({ message: "Sign In Sucess....", data : result });
          })
          .catch((err) => {
            console.log("User Error : " + err);
            return response
              .status(500)
              .json({ message: "Internal Server Error....", error: err });
          });
      }
    } catch (err) {
      console.error(err);
      return response.status(500).json({ error: "Internal Server Error" });
    }
  };

  