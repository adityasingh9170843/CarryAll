import express from "express";
import {registerUser} from "../controllers/authController.js";
import {loginUser} from "../controllers/authController.js";
import {logout} from "../controllers/authController.js";
const router = express.Router();



router.get("/", (req, res) => {
  res.send("user page");
});

router.post("/register", registerUser )
  
router.post("/login", loginUser )

router.get("/logout", logout )
  


export default router;
