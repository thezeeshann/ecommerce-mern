import mongoose from "mongoose";
import { CART_ITEM_STATUS } from "../utils/constant.js";

const generateOrderId = () => {
  return Math.random().toString(36).substr(2, 12).toUpperCase();
};

const OrderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    default: generateOrderId,
    unique: true,
  },
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: Number,
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  status: {
    type: String,
    default: CART_ITEM_STATUS.Not_processed,
    enum: [
      CART_ITEM_STATUS.Not_processed,
      CART_ITEM_STATUS.Processing,
      CART_ITEM_STATUS.Shipped,
      CART_ITEM_STATUS.Delivered,
      CART_ITEM_STATUS.Cancelled,
    ],
  },
  total: {
    type: Number,
    default: 0,
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
});

const OrderModel = mongoose.model("Order", OrderSchema);
export default OrderModel;
