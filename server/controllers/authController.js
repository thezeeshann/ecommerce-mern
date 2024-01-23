import UserModel from "../models/user.js";
import validator from "validator";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password,role } = req.body;
    if (!firstName || !lastName || !email || !password) {
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

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hash(password, salt);
    
    const user = await UserModel.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        role:role,
        password: hashPassword,
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
