import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import { json, urlencoded } from "express";
import fs from "fs";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);






const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");








app.get("/",(req,res)=>{
    res.send("Hello")
})



app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
