import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017/CarryAll")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

export default mongoose.connection;