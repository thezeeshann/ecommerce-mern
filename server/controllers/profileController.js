import ProfileModel from "../models/profile.js";
import UserModel from "../models/user.js";

export const updateProfile = async (req, res) => {
  try {
    console.log("1")
    const userId = req.existUser.userId;
    const { address, city, state, country, zipCode } = req.body;
    if (!address || !city || !state || !country || !zipCode) {
      return res.status(404).json({
        success: false,
        message: "All fields are required",
      });
    }
    console.log("2")
    const userDetails = await UserModel.findById(userId);
    const profile = await ProfileModel.findById(userDetails.additionalDetails);
    console.log(profile)
    if (!userDetails) {
      return res.status(404).json({
        success: false,
        message: "User does not exist",
      });
    }
    console.log("4")
    profile.address = address;
    profile.city = city;
    profile.state = state;
    profile.country = country;
    profile.zipCode = zipCode;
    profile.status = true
    await profile.save();
    console.log("6")
    const updatedUserDetails = await UserModel.findById(userId)
      .populate("additionalDetails")
      .exec();

    return res.status(201).json({
      success: true,
      message: "Profile updated successfully",
      updatedUserDetails,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const updateUsername = async (req, res) => {
  try {
    const userId = req.existUser.userId;
    const { firstName, lastName } = req.body;
    if(!firstName || !lastName){
      return res.status(404).json({
        success:false,
        message:"Enter you firstname and lastname"
      })
    }
    const user = await UserModel.findByIdAndUpdate(
      userId,
      { firstName, lastName },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "username updated successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
