import express from "express";
import {isLoggedin} from "../middlewares/isLoggedin.js";
import {productModel} from "../models/productmodel.js";
import {userModel} from "../models/usermodel.js";
const router = express.Router();

router.get("/", (req, res) => {
    let error = req.flash("error");
    res.render("index", { error,loggedin:false });
})


router.get("/addtocart/:id",isLoggedin, async(req, res) => {
    console.log(req.loggedInUser);
    let user = await userModel.findOne({email: req.loggedInUser.email} )
    user.cart.push(req.params.id)
    await user.save()
    req.flash("success","Product added to cart");
    res.redirect("/shop")

})

router.get("/cart",isLoggedin, async(req, res) => {
    let user = await userModel.findOne({email: req.loggedInUser.email}).populate("cart")
        
    res.render("cart",{user});
})

router.get("/shop",isLoggedin, async(req, res) => {
    let product = await productModel.find();
    let success = req.flash("success");
    res.render("shop",{product,success});
})


router.get("/logout", (req, res) => {
    res.clearCookie("token");
    res.redirect("/");
})
export default router;