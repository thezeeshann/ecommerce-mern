import cloudinary from "cloudinary";
import dotenv from "dotenv"
dotenv.config()

const cloudinaryConnect = async () => {
  try {
    cloudinary.config({
        cloud_name:process.env.CLOUD_NAME,
        api_key:process.env.API_KEY,
        api_secret:process.env.API_SECRET
    })
    console.log("cloudinary connected")
  } catch (error) {
    console.log(error);
  }
};

export default cloudinaryConnect;
