import mongoose from "mongoose";
const AppMongodb = async() => {
    try {
        await mongoose.connect('mongodb+srv://cloudtest.pxzr0pi.mongodb.net/GermanDev')
        console.log('mongodb connecting!')
    } catch (error) {
        console.log('Err mongodb', error)
    }
}
export default AppMongodb;