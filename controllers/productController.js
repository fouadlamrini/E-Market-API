const Product = require("../models/productModel");
const mongoose = require("mongoose");
const BaseController = require("../core/BaseController");

class ProductController extends BaseController {
  async createProduct(req, res,next) {
    const { title, description, price, stock, category, imageUrl } = req.body;

    if (!title || !description || !price || !stock || !category) {
      return res
        .status(400)
        .json({
          error: "title, description, price, stock and category are required",
        });
    }

    if (isNaN(price) || isNaN(stock)) {
      return res
        .status(400)
        .json({ error: "price and stock must be numeric values" });
    }

    try {
      const createProduct = await Product.create({
        title,
        description,
        price,
        stock,
        category,
        imageUrl,
      });
      res.status(201).json({
        message: "Product created successfully",
        product: createProduct,
      });
    } catch (error) {
        next(error);
    }
  }

  async getAllProducts(req, res,next) {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
       next(error);
    }
  }

  async getProductById(req, res,next) {
    try {
      const { id } = req.params;
      console.log(id);
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid product ID" });
      }

      const product = await Product.findById(id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json(product);
    } catch (error) {
        next(error);
    }
  }

  async deleteProduct(req, res,next) {
    try {
      const { id } = req.params;
      const product = await Product.findById(id);
       if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid product ID" });
        }

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      await Product.findByIdAndDelete(id);
      res.status(204).send();
    } catch (error) {
        next(error);
    }
  }

  async updateProduct(req, res,next) {
    try {
      const { id } = req.params;
      const { title, description, price, stock, category, imageUrl } = req.body;

      const product = await Product.findById(id);
         if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid product ID" });
        }

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      if (title !== undefined) product.title = title;
      if (description !== undefined) product.description = description;
      if (price !== undefined) {
        if (isNaN(price))
          return res.status(400).json({ error: "price must be numeric" });
        product.price = Number(price);
      }
      if (stock !== undefined) {
        if (isNaN(stock))
          return res.status(400).json({ error: "stock must be numeric" });
        product.stock = Number(stock);
      }
      if (category !== undefined) product.category = category;
      if (imageUrl !== undefined) product.imageUrl = imageUrl;

      const updatedProduct = await product.save();

      res.status(200).json({
        message: "Product updated successfully",
        product: updatedProduct,
      });
    } catch (error) {
        next(error);
    }
  }
}
module.exports = ProductController;
