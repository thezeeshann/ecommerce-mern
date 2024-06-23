import mongoose from "mongoose";


const generateOrderId = () => {
  return Math.random().toString(36).substr(2, 12).toUpperCase();
};

const OrderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    default: generateOrderId,
    unique: true,
  },
  // cart: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Cart",
  // },
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      productName: String,
      quantity: Number,
      price: Number,
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
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
