import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        lowercase: true
    },
    image: {
        type: String
    },
    price: {
        type: Number,
        require: true,
        default : 0
    },
    stock: {
        type: Number,
        require: true,
        default : 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        require: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},{timestamps: true})

const Product = mongoose.model('Product', productSchema)