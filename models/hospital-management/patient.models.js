import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    disease: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    bloodGroup: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        enum: ["M","F","O"],
        require: true
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }
},{timestamps: true})

const Patient = mongoose.model('Patient', patientSchema)