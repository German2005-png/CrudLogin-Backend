import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv';
export default function createToken(payload){
    return new Promise((resolve, reject)=>{
        jwt.sign(payload, "secret", {expiresIn: '1day'}, (err, token)=> {
            if(err) reject("Error al crear el token", err);
            resolve(token);
        })
    })
}