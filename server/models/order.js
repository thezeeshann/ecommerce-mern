import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cart",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  total: {
    type: Number,
    default: 0,
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
});

const OrderModel = mongoose.model("Order", OrderSchema);
export default OrderModel;
