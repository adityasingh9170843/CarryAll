import express from "express";
import { userModel } from "../models/usermodel.js";
import Joi from "joi";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const router = express.Router();

const registerSchema = Joi.object({
  fullname: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

router.get("/", (req, res) => {
  res.send("user page");
});

router.post("/register", (req, res) => {
  try {
    const { error } = registerSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    let { email, password, fullname } = req.body;

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (error) return res.send(error);
        else {
          let users = await userModel.create({
            email,
            password: hash,
            fullname,
          });
          jwt.sign
        }
      });
    });
  } catch (err) {
    console.log(err.message);
  }
});

export default router;
