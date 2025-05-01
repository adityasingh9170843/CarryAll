import mongoose from "mongoose";

import config from "config";


console.log("Running ms file");

mongoose
  .connect(`${config.get("MONGO_URI")}/carryAll`)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

  
;
export default mongoose.connection;