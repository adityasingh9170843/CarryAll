import mongoose from "mongoose";



const productSchema = mongoose.Schema({
    image: String,
    title: String,
    price: Number,
    discount : {
        type:Number,
        default : 0
    },
    bgcolor : String,
    panelColor : String,
    textcolor : String,
})

export const productModel = mongoose.model("user", productSchema)