import { validationResult } from 'express-validator';
import { request, response } from 'express';
import GardenLogin from '../model/gardenLogin.model.js';

export const signin = async (request, response, next) => {
    try {
        const { email, password } = request.body;

        const gardenobj = await GardenLogin.findOne({ where: { email }, raw: true });

        if (gardenobj && GardenLogin.checkPassword(password, gardenobj.password))
            return response.status(201).json({ message: "Sign In Success", gardenobj });

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

        const gardenLogin = await GardenLogin.findByPk(id);
        if (!gardenLogin) {
            return response.status(404).json({ message: "GardenLogin not found" });
        }

        await GardenLogin.update({ email, password }, {
            where: { id }
        });

        return response.status(200).json({ message: "Profile Updated Successfully" });
    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: "Internal Server Error", err });
    }
};
