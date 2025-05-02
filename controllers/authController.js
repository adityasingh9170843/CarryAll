import bcrypt from "bcrypt";
import { userModel } from "../models/usermodel.js";
import Joi from "joi";
import generateToken from "../utils/generateToken.js";

const registerSchema = Joi.object({
  fullname: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const registerUser = async (req, res) => {
  try {
    const { error } = registerSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    let { email, password, fullname } = req.body;

    let user = await userModel.findOne({ email });
    if (user) {
        req.flash("error", "User already exists");
        return res.redirect("/")
    }
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (error) return res.send(error);
        else {
          let user = await userModel.create({
            email,
            password: hash,
            fullname,
          });
          let token = generateToken(user);
          res.cookie("tokren", token);
          res.send("user created");
        }
      });
    });
  } catch (err) {
    console.log(err.message);
  }
};


export const loginUser = async (req,res)=>{
    let {email,password} = req.body;

    let user = await userModel.findOne({email})
    if(!user) return res.status(404).send("user not found please register first")

    bcrypt.compare(password,user.password,(err,result)=>{
        if(err) return res.send("password not matched")
        else if(result){
            let token = generateToken(user);
            res.cookie("token",token);
            res.send("user logged in")
        }
    })
}

export const logout = (req,res)=>{
    res.cookie("token","");
    res.redirect("/")
}

