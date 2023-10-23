import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv"
dotenv.config()

const uploadImage = async (imagePath,folder) => {
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
    folder:process.env.FOLDER_NAME

  };

  try {
    const result = await cloudinary.uploader.upload(imagePath,folder, options);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

export default uploadImage;
