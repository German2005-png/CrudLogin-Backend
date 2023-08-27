import mongoose from "mongoose";
const AppMongodb = async() => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.9.1/test')
        console.log('mongodb connecting!')
    } catch (error) {
        console.log('Err mongodb', error)
    }
}
export default AppMongodb;