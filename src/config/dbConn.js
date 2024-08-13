import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const response = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Mongodb connected Successfully!! /n ${response}`);
        return response
    }
    catch (error) {
        console.log(error)
    }
}

export default connectDB