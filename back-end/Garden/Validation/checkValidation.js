import { body, validationResult } from "express-validator";

export const checkValidation = () => {
    return [
        body("name", "Name is required").notEmpty(),
        body("name", "Only alphabets are allowed").isAlpha(),
        body("contactNo", "Contact number is required").notEmpty(),
        body("contactNo", "Contact number should be a 10-digit number").isLength({ min: 10, max: 10 }).matches(/^\d+$/),
        (request, response, next) => {
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                return response.status(400).json({ errors: errors.array() });
            }
            next();
        }
    ];
};
