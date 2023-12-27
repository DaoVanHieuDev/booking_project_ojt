// validation.js
import {body}  from "express-validator";

export const registrationValidationRules = () => {
    return [
        body("username").notEmpty().withMessage("Username không được trống"),
        body("email").isEmail().withMessage("Email không hợp lệ"),
        body("password").isLength({ min: 5 }).withMessage("Mật khẩu phải có ít nhất 5 ký tự"),
    ];
};
