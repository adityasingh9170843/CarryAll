import mongoose from "mongoose";



const userSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    cart :{
        type:Array,
        default : []
    } ,
    isadmin : Boolean,
    orders: {
        type : Array,
        default : []
    },
    contact : Number,
    picture : String
})

export const UserModel = mongoose.model("user", userSchema)