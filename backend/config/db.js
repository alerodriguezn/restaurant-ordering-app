import mongoose from "mongoose";
const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        const url = `${connection.connection.host}:${connection.connection.port}`
        console.log(`MongoDB connected on ${url} `)
    } catch (error) {
        console.log(error)
    }
}

export default connectDB