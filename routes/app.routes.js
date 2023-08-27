import { Router } from "express";
import {createRegister, createLogin, logout} from '../controllers/auth.controller.js';
import { registerSchema, LoginSchema } from "../schemas/auth.validate.js";
import {validateSchema} from '../middlewares/validate.schema.js'
const router = Router();
router.post('/register', validateSchema(registerSchema), createRegister);
router.post('/login', validateSchema(LoginSchema), createLogin);
router.post('/logout', logout)
export default router;