import express from "express" 
import { login, register } from "../controllers/auth.js";
import { registrationValidationRules } from "../utils/validation.js";
const router = express.Router();

//* đăng kí 
router.post('/register',registrationValidationRules(), register)
router.post('/login',login)



export default router