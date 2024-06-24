import jwt from "jsonwebtoken";
import UserModel from "../models/user.js";

export  const authenticateJwt = async (req, res, next) => {
  try {
    const token =
      req.cookies.token || req.header("Authorization").replace("Bearer ", "");
    if (!token || token === undefined) {
      return res.status(404).json({
        success: false,
        message: "Token missing",
      });
    }
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.existUser = decode;
    } catch (error) {
      return res.status(404).json({
        success: false,
        message: "Something went wrong while verify the token",
      });
    }
    next();
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Unauthorized",
    });
  }
};





export const isAdmin =  async(req,res,next)=>{
  try {
    const userDetails = await UserModel.findOne({email:req.existUser.email})
    if(userDetails.role !== "Admin"){
      return res.status(404).json({
        success:false,
        message:"You are not authorized to create or modify data"
      })
    }
    next()
  } catch (error) {
    return res
			.status(500)
			.json({ success: false, message: `User Role Can't be Verified` });
  }
}