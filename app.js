import db from "./config/mongoose-connection.js";
import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import { json, urlencoded } from "express";
import fs from "fs";
import index from "./routes/index.js";
import ownersRouter from "./routes/ownersRouter.js";
import usersRouter from "./routes/usersRouter.js";
import productsRouter from "./routes/productsRouter.js";
import dotenv from "dotenv";
import expressSession from "express-session";
import flash from "connect-flash"

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


dotenv.config();


const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(expressSession({
    secret:"secret",
    resave:false,
    saveUninitialized:false
}))
app.use(flash())
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");






app.use("/",index)
app.use("/owners",ownersRouter);
app.use("/users",usersRouter);
app.use("/products",productsRouter);



app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
