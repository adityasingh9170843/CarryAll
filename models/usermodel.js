import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  cart: {
    type: Array,
    default: [],
  },
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
    default: [],
  }],
  contact: Number,
  picture: String,
});

export const userModel = mongoose.model("user", userSchema);
