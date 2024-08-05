import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    pincode: {
        type: String,
        require: true
    },
    specializedIn: [
        {
            type: String,
        }
    ]
},{timestamps: true})

const Hospital = mongoose.model('Hospital', hospitalSchema)