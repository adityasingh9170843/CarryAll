import jwt from "jsonwebtoken";
import { userModel } from "../models/usermodel";

const isLoggedin = async(req,res,next)=>{
    const token = req.cookies.token;
    if(!token) {
        req.flash("error","Please login first");
        return res.redirect("/");
    }
    
    try{
        let decoded = jwt.verify(token,process.env.JWT_KEY);
        let user = await userModel.findOne({email:decoded.email}).select("-password");
        req.loggedInUser = user;
        next();
    }catch(err){
        req.flash("error","Please login first");
        return res.redirect("/");
    }
}

export default isLoggedin