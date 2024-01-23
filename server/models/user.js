import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required:true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true
    },
    image: {
      type: String,
    },
    role: {
      type: String,
      enum: ["Admin", "User"],
      required:true
    },
    additionalDetails: {
      type: mongoose.Schema.Types.ObjectId,
      required:true,
      ref: "Profile",
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("User", UserSchema);
export default UserModel;
