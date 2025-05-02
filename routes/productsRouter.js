import express from "express";
import  {upload}  from "../config/multer-config.js";
const router = express.Router();
import {productModel} from "../models/productmodel.js";
router.post("/create", upload.single("image"), async (req, res) => {
    let {  name, price,bgcolor,panelcolor,textcolor } = req.body;
    let product = await productModel.create({
        image: req.file.buffer,
        name,
        price,
        bgcolor,
        panelcolor,
        textcolor
    })
    req.flash("success","Product created successfully");
    res.redirect("/owners/admin");
})




export default router;