import mongoose from "mongoose";

export const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOOSE_DB_URI)
        console.log(`Connected to MongoDB`)
    } catch (error) {
        console.log(`Error to connect to MongoDB service`)
    }
}