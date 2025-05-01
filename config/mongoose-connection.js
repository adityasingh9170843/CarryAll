import mongoose from "mongoose";
import debug from "debug";
const dbgr = debug("development:mongoose");

mongoose.set("debug", true);
import config from "config";
mongoose
  .connect(`${config.get("MONGO_URI")}/carryAll`)
  .then(() => {
    dbgr("Connected to database");
  })
  .catch((err) => {
    dbgr(err);
  });

mongoose.set("debug", true);
export default mongoose.connection;