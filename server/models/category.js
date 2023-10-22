import mongoose from "mongoose"

const CategorySchema = new mongoose.Schema({
    categoryName:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true,
        unique: true
    },

})


const CategoryModel = mongoose.model("Category",CategorySchema)
export default CategoryModel