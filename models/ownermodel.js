import mongoose from "mongoose";


const ownerSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    products: {
        type : Array,
        default : []
    },
    picture : String,
    gstin: String
})

export const ownerModel = mongoose.model("user", ownerSchema)