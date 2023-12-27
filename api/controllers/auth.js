import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import configDotenv from 'dotenv';
import jwt from "jsonwebtoken";
configDotenv.config();
export const register = async (req, res) => {
    // Validate request using express-validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });


        await newUser.save();
        res.status(200).json("Đã đăng ký thành công!");
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Đã xảy ra lỗi khi đăng ký" });
    }
};
export const login = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(404).json("Không tìm thấy người dùng");

        }

        const validPassword = await bcrypt.compare(
            req.body.password, user.password
        )
        if (!validPassword) {
            return res.status(400).json("sai mật khẩu");

        }

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT);

        const { password, isAdmin, ...others } = user._doc
        res.cookie("access_token", token, { httpOnly: true }).cookie("user", user, { httpOnly: true }).status(200).json({ ...others });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Đã xảy ra lỗi khi đăng ký" });
    }
};
