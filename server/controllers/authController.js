import bcrypt from "bcrypt";
import validator from "validator";
import ProfileModel from "../models/profile.js";
import UserModel from "../models/user.js";
import jwt from "jsonwebtoken";
import OTP from "../models/otp.js";
import otpGenerator from "otp-generator";
import dotenv from "dotenv";
dotenv.config();

export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, role, otp } = req.body;
    if (!firstName || !lastName || !email || !password || !otp) {
      return res.status(404).json({
        success: false,
        message: "ALl fields are required",
      });
    }
    const validateEmail = validator.isEmail(email);
    if (!validateEmail) {
      return res.status(404).json({
        success: false,
        message: "Invalid email Address",
      });
    }
    const existUser = await UserModel.findOne({ email });
    if (existUser) {
      return res.status(404).json({
        success: false,
        message: "User alredy exist",
      });
    }

    const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
    console.log("OTP response", response);

    if (response.length === 0) {
      // OTP not found for the email
      return res.status(400).json({
        success: false,
        message: "The OTP is not valid",
      });
    } else if (otp !== response[0].otp) {
      // Invalid OTP
      return res.status(400).json({
        success: false,
        message: "The OTP is not valid",
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
      role: role,
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
      message: "User can not be register",
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
    const existUser = await UserModel.findOne({ email }).populate("additionalDetails");
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
        token
        
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

export const sendOtp = async (req, res) => {
  try {
    const { email } = req.body;
    const checkUserExist = await UserModel.findOne({ email });

    if (checkUserExist) {
      return res.status(404).josn({  success: false,
        message: `Login Failure Please Try Again`, });
    }

    const otp = await otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    const result = await OTP.findOne({ otp: otp });

    while (result) {
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
      });
    }

    const otpPayload = { email, otp };
    const otpBody = await OTP.create(otpPayload);
    // console.log("OTP Body", otpBody);
    res.status(200).json({
      success: true,
      message: `OTP Sent Successfully`,
      otp,
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: errror.message });
  }
};


