import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const AppMongodb = async() => {
    try {
        await mongoose.connect(process.env.KEY_DB);
    } catch (error) {
        console.log('Err mongodb', error);
    }
}
export default AppMongodb;