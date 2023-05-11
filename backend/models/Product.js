import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required:true,
        trim:true
    },
    description:{
        type: String,
        required:true,
        trim:true
    },
    price:{
        type: Number,
        required:true,
        trim:true
    
    }
}, {
    timestamps:true,
})


const product = mongoose.model("Product", productSchema)

export default product