import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    visitors: Number,
    sales: Number,
    month: String
});

const Product = mongoose.models.Products || mongoose.model('Products', ProductSchema);

export default Product;