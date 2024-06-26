import ProfileModel from "../models/profile.js";
import UserModel from "../models/user.js";

export const updateProfile = async (req, res) => {
  try {
    const userId = req.existUser.userId;
    const { address, city, state, country, zipCode } = req.body;
    if (!address || !city || !state || !country || !zipCode) {
      return res.status(404).json({
        success: false,
        message: "All fields are required",
      });
    }
    const userDetails = await UserModel.findById(userId);
    const profile = await ProfileModel.findById(userDetails.additionalDetails);
    if (!profile) {
      return res.status().json({
        success: false,
        message: "User's additional Details not exist",
      });
    }
    if (!userDetails) {
      return res.status(404).json({
        success: false,
        message: "User does not exist",
      });
    }
    profile.address = address;
    profile.city = city;
    profile.state = state;
    profile.country = country;
    profile.zipCode = zipCode;
    profile.status = true;
    await profile.save();
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
    if (!firstName || !lastName) {
      return res.status(404).json({
        success: false,
        message: "Enter you firstname and lastname",
      });
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

export const deleteProfile = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await UserModel.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    const additionalProfileId = user.additionalDetails;
    if (additionalProfileId) {
      await ProfileModel.findByIdAndDelete(additionalProfileId);
    }
    return res.status(200).json({
      success: true,
      message: "User profile and additional profile deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getSingleUser = async (req, res) => {
  try {
    const userId = req.existUser.userId;
    const user = await UserModel.findById(userId)
      .populate("additionalDetails")
      .exec();
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user does not exist",
      });
    }
    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find({ role: "User" })
      .populate("additionalDetails")
      .exec();
    if (!users || users.length === 0) {
      return res.status(404).json({
        success: false,
        message: "user does not exist",
      });
    }
    return res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
