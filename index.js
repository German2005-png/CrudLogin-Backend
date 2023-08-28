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
        origin: 'https://crudlogin.netlify.app',
        allowedHeaders: "*",
        methods: ["GET", "POST", "PUT", "DELETE"]
    }
));
app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "default-src 'self' font-src 'self' <URL>");
    res.header('Access-Control-Allow-Origin', 'https://crudlogin.netlify.app');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next()
})
app.use(morgan("dev"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(router)
//server
app.listen(4000, ()=>{
    console.log("SERVER ON PORT 4000")
})
export default app