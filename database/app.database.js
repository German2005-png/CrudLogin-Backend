import mongoose from "mongoose";
const AppMongodb = async() => {
    try {
        await mongoose.connect('mongodb+srv://GermanDev:<password>@cloudtest.pxzr0pi.mongodb.net/?retryWrites=true&w=majority')
        console.log('mongodb connecting!')
    } catch (error) {
        console.log('Err mongodb', error)
    }
}
export default AppMongodb;