import { Result, validationResult } from 'express-validator';
import PhotoGrapherLogin from '../models/photoGrapherLogin.model.js';

export const signin = async (request, response, next) => {
    try {
        const { email, password } = request.body;

        const photographerObj = await PhotoGrapherLogin.findOne({ where: { email }, raw: true });

        if (photographerObj && PhotoGrapherLogin.checkPassword(password, photographerObj.password))
            return response.status(200).json({ message: "Sign In Success", photographerObj });

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

        await PhotoGrapherLogin.create({ email, password })
            .then((result) => {
                return response.status(200).json({ message: "SignUp Sucess...", data: result });
            }).catch(err => {
                if (err.parent.errno * 1 == 1062)
                    return response.status(401).json({ message: "Email is already registered...", Error: err });
                return response.status(401).json({ message: "please enter correct details...", Error: err });
            })
    } catch (err) {
        // console.error("Hello Satish : " + err.parent.errno);
        console.log(err);
        return response.status(500).json({ error: "Internal Server Error...", err });
    }
}

export const updateProfile = async (request, response, next) => {
    try {
        const id = request.params.id;
        const { email, password } = request.body;

        const photographerLogin = await PhotoGrapherLogin.findByPk(id);
        if (!photographerLogin) {
            return response.status(404).json({ message: "photographerLogin not found" });
        }

        await PhotoGrapherLogin.update({ email, password }, {
            where: { id }
        });

        return response.status(200).json({ message: "Profile Updated Successfully" });
    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: "Internal Server Error", err });
    }
};
