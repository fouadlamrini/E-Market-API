const Product = require("../models/productModel");
const BaseController = require('../core/BaseController');
class ProductController extends BaseController {
async createProduct(req, res) {
    const {title, description, price, stock, category,imageUrl} = req.body;
    console.log(req.body);
    if (!title || !description || !price || !stock || !category) {
        return res.status(400).json({ error: "title, description, price, stock and category are required" });
    }

    try {
        const createProduct = await Product.create({ title, description, price, stock, category, imageUrl });
        res.status(201).json({
            message: "Product created successfully",
            product: createProduct
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async  getAllProducts(req, res) {
    try {
        const products = await Product.find(); 
        res.status(200).json(products); 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async getProductById(req, res) {
    try {
        const { id } = req.params; 
        console.log(id)       
        const product = await Product.findById(id); 
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async deleteProduct(req, res) {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        await Product.findByIdAndDelete(id);
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


}
module.exports = ProductController;