import bcrypt from "bcrypt";
import validator from "validator";
import ProfileModel from "../models/profile.js";
import UserModel from "../models/user.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, confirmPassword } =
      req.body;
    if (!firstName || !lastName || !email || !password) {
      return res.status(404).json({
        success: false,
        message: "All fields are required",
      });
    }
    const validateEmail = validator.isEmail(email);
    if (!validateEmail) {
      return res.status(404).json({
        success: false,
        message: "Invalid email Address",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "password and confirm password does not match",
      });
    }

    const existUser = await UserModel.findOne({ email });
    if (existUser) {
      return res.status(404).json({
        success: false,
        message: "User alredy exist",
      });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const profileInfo = await ProfileModel.create({
      address: null,
      city: null,
      state: null,
      country: null,
      zipCode: null,
    });

    const user = await UserModel.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashPassword,
      additionalDetails: profileInfo._id,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName}%20${lastName}`,
    });

    return res.status(201).json({
      success: true,
      message: "User register succesfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json({
        success: false,
        message: "All fields are required",
      });
    }
    const existUser = await UserModel.findOne({ email }).populate(
      "additionalDetails"
    );
    if (!existUser) {
      return res.status(404).json({
        success: false,
        message: "User does not exist",
      });
    }

    if (await bcrypt.compare(password, existUser.password)) {
      const payload = {
        userId: existUser._id,
        email: existUser.email,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      existUser.token = token;

      const option = {
        httpOnly: true,
        secure: true,
      };

      return res.cookie("token", token, option).status(200).json({
        success: true,
        message: "Login successfull",
        existUser,
        token,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Incrroct password ",
      });
    }
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Login failed",
    });
  }
};

export const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const userId = req.existUser.userId;
    const userDetails = await UserModel.findById(userId);
    if (!userDetails) {
      return res.status.json({
        success: false,
        message: "User does't exist",
      });
    }

    const isPasswrordMatch = await bcrypt.compare(
      oldPassword,
      userDetails.password
    );
    if (!isPasswrordMatch) {
      return res
        .status(401)
        .json({ success: false, message: "The password is incorrect" });
    }

    const encryptedPassword = await bcrypt.hash(newPassword, 10);
    const updatedPassword = await UserModel.findByIdAndUpdate(
      req.existUser.userId,
      { password: encryptedPassword },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "password updated successfully",
      data: updatedPassword,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error occurred while updating password",
    });
  }
};