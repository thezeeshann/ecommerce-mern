import ProductModel from "../models/product.js";
import uploadImage from "../utils/uploadImage.js"


export const createProducts = async(req, res) => {
  try {
    const { productName, price, description, quantity } = req.body;
    const image = req.files.image;

    if (!productName || !price || !description || quantity) {
      return res
        .status(404)
        .json({ success: false, message: "All fields are required" });
    }

    if(!image){
        return res.status(404).json({
            success:false,
            message:"All fields are required"
        })
    }

    const uploadImage = await uploadImage(image,process.env.FOLDER_NAME)

    const product = await ProductModel.create({
        productName:productName,
        price:price,
        description:description,
        quantity:quantity,
        image:uploadImage.secure_url
    })

    return res.status(201).json({
        success:true,
        message:"Product create successfully",
        product
    })

  } catch (error) {
    return res.status(404).json({
        success:false,
        message:"Product not created"
    })
  }
};
