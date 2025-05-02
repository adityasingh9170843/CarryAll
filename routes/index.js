import express from "express";
import {isLoggedin} from "../middlewares/isLoggedin.js";
import {productModel} from "../models/productmodel.js";
const router = express.Router();

router.get("/", (req, res) => {
    let error = req.flash("error");
    res.render("index", { error });
})

router.get("/shop",isLoggedin, async(req, res) => {
    let product = await productModel.find();
    res.render("shop",{product});
})

export default router;