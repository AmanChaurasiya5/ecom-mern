import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: Array, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    sizes: { type: Array, required: true },
    bestseller: { type: Boolean },
    date: {
        type: Date,
        required:true,
        default: () => new Date(Date.now() + (5.5 * 60 * 60 * 1000))
    }
})

const productModel = mongoose.models.product || mongoose.model("product", productSchema)
export default productModel 