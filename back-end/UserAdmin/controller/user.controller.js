import User from "../models/user.model.js";

export const signin = async (request, response, next) => {
  try {
    const { email, password } = request.body;

    const userObj = await User.findOne({ where: { email }, raw: true });

    if (userObj) {
      return response.status(200).json({ message: "Sign In Success", userObj });
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




// export const signup = async (request, response, next) => {
//   try {
//     const { name, email, password, contactNo } = request.body;
//     await User.create({
//       name,
//       email,
//       password,
//       contactNo,
//     })
//       .then((result) => {
//         return response
//           .status(200)
//           .json({ message: "SignUp Sucess....", data: result });
//       })
//       .catch((err) => {
//         console.log("User Error : " + err);
//         return response
//           .status(500)
//           .json({ message: "Internal Server Error....", error: err });
//       });
//   } catch (err) {
//     console.log("User Error : " + err);
//     // if ((err.parent.errno * 1) == 1062)
//     //     return response.status(500).json({ error: "email id is already present..." });
//     return response.status(500).json({ error: "Internal Server Error" });
//   }
// };
