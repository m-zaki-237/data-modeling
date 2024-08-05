import mongoose from "mongoose";

const orderItems = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        require: true
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        require: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orderItems: {
        type: [orderItems]
    },
    address: {
        tpye: String,
        require: true
    },
    status: {
        type: String,
        enum: ["PENDING","CANCELLED","DILEVERD"],
        default: "PENDING"
    }
},{timestamps: true})


const Order = mongoose.model('Order', orderSchema)