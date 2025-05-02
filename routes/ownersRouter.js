import express from "express";
import { ownerModel } from "../models/ownermodel.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Owners Page");
});

router.post("/create", async (req, res) => {
  let { fullname, email, password } = req.body;
  let owners = await ownerModel.find();
  if (owners.length > 0) return res.status(503).send("you dont have permission");
  let createdOwner = await ownerModel.create({
    fullname,
    email,
    password,
  });
  res.status(201).send(createdOwner);
});

router.get("/admin",(req,res)=>{
    res.render("createproducts");
})

export default router;
