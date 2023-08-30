import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import router from "./routes/app.routes.js";
import cors from 'cors';
import AppMongodb from "./database/app.database.js"; 
const app = express();
AppMongodb()
//middware
// app.use(AppMongodb)
app.use(cors(
    {
        origin: 'https://crud-login-omega.vercel.app',
        allowedHeaders: "*",
        methods: ["POST", "PUT", "DELETE"],
        optionsSuccessStatus: 204
    }
));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://crud-login-omega.vercel.app/');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next()
})
app.use(morgan("dev"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(router)
app.get("/",(req,res)=>{
    res.send("Hello")
})
//server
app.listen(4000, ()=>{
    console.log("SERVER ON PORT 4000")
})
export default app