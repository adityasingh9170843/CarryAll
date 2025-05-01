import express from "express";
import ownerModel from "../models/ownermodel.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Owners Page");
});

if (process.env.NODE_ENV === "development") {
  router.post("/create", async (req, res) => {
    let { fullname, email, password } = req.body;
    let owners = await ownerModel.find();
    if (owners.lenth > 0) return res.send(503).send("you dont have permission");
    let createdOwner =await ownerModel.create({
      fullname,
      email,
      password
    });
    res.status(201).send(createdOwner);
  });
}

export default router;
