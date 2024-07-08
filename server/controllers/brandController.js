import mongoose from "mongoose";
import BrandModel from "../models/brand.js";

export const getBrandById = async (req, res) => {
  try {
    const { brandId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(brandId)) {
      return res.status(400).json({ message: "Invalid brand ID" });
    }

    const brand = await BrandModel.findById(brandId);

    if (!brand) {
      return res.status(404).json({ message: "Brand not found" });
    }

    res.status(200).json(brand);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllBrands = async (req, res) => {
  try {
    const brands = await BrandModel.find();
    res.status(200).json(brands);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createBrand = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name) {
      return res.status(404).json({
        success: false,
        message: "Name field are requied",
      });
    }

    const existingBrand = await BrandModel.findOne({ name });
    if (existingBrand) {
      return res.status(400).json({ message: "Brand already exists" });
    }

    const newBrand = new BrandModel({
      name,
      description,
    });

    const savedBrand = await newBrand.save();
    res.status(201).json(savedBrand);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBrand = async (req, res) => {
  try {
    const { brandId } = req.params;
    const { name, isActive } = req.body;

    if (!mongoose.Types.ObjectId.isValid(brandId)) {
      return res.status(400).json({ message: "Invalid brand ID" });
    }

    const updatedBrand = await BrandModel.findByIdAndUpdate(
      brandId,
      { name, isActive, updated: Date.now() },
      { new: true, runValidators: true }
    );

    if (!updatedBrand) {
      return res.status(404).json({ message: "Brand not found" });
    }

    res.status(200).json(updatedBrand);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBrand = async (req, res) => {
  try {
    const { brandId } = req.body;

    const brand = await BrandModel.findById(brandId);
    if (!brand) {
      return res.status(404).json({
        success: false,
        message: "Brand not found",
      });
    }

    await BrandModel.findByIdAndDelete(brand);

    return res.status(200).json({
      success: true,
      message: "Brand deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
