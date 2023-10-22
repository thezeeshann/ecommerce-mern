import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: Number,
  purchasePrice: {
    type: Number,
    default: 0,
  },
  totalPrice: {
    type: Number,
    default: 0,
  },
  priceWithTax: {
    type: Number,
    default: 0,
  },
  totalTax: {
    type: Number,
    default: 0,
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
});

const CartModel = mongoose.model("Cart", CartSchema);
export default CartModel;
