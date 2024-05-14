import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    default: null,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
  },
  title: {
    type: String,
    trim: true,
  },
  rating: {
    type: Number,
    default: 0,
    required: true,
    min: 0,
    max: 5,
  },
  review: {
    type: String,
    trim: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: Date,
});

const ReviewModel = mongoose.model("Review", ReviewSchema);
export default ReviewModel;
