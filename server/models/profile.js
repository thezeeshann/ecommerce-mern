import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  },
  zipCode: {
    type: String,
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
},{
    timestamps:true
}
);


const ProfileModel = mongoose.model("Profile",ProfileSchema)
export default ProfileModel
