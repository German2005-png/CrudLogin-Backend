import jwt from "jsonwebtoken";
import createToken from "../models/token.model.js";
import router from "../routes/app.routes.js";
import bcrypt from 'bcrypt';
import User from '../models/auth.schema.js';
import { token } from "morgan";
export const createRegister = async(req,res) => {
    const {username, email, password} = req.body;
    try {
        const passwordHash = await bcrypt.hash(password, 15);
        const users = new User({username,email,password: passwordHash});
        const useSave = await users.save();
        const token = await createToken({id: useSave.id});
        res.cookie("token", token);
        res.json({
            username: useSave.username,
            email: useSave.email,
            password: useSave.password,
            token: token
        });
    } catch (error) {
        console.log("ERROR DE USUARIO", error)
    }
}
export const createLogin = async(req,res) => {
    const {username, password} = req.body;
    try {
        const comparUser = await User.findOne({username: username});
        if(!comparUser){
            console.error("No se encontro el usuario con el nombre especifico");
            res.status(400).json({message: 'Not found User'});
        }
        const passwordFont = await bcrypt.compare(password, comparUser.password);
        if(!passwordFont) console.error('No se parecen la contraseña')
        const token = await createToken({id: comparUser._id.toString()});
        res.cookie("Token", token)
        console.log("Obtuviendo Token");
        res.json({
            username: comparUser.username,
            password: comparUser.password,
            token: token,
            ff: passwordFont
        })
    } catch (error) {
        console.log("SALIO MAL CON EL LOGIN ", error);
    }
}
export const logout = async(req, res) => {
    try {
        res.cookie("token", "", {expiresIn: new Date()})
        res.status(200).json({message: 'logout'})
    } catch (error) {
        console.log("Error al cerrar sesion", error);
    }
}