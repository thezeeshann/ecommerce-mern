import mongoose from "mongoose";
import slugify from "slugify";

const BrandSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  slug: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
    trim: true,
    default: null,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
});

BrandSchema.pre("save", function (next) {
  if (!this.isModified("name")) {
    return next();
  }
  this.slug = slugify(this.name, { lower: true });
  next();
});

const BrandModel = mongoose.model("Brand", BrandSchema);
export default BrandModel;
