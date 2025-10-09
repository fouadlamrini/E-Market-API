const express = require("express");
const ProductController = require("../controllers/ProductController");
const router = express.Router();
const controller = new ProductController();
router.post("/", async (req, res) => {
  controller.createProduct(req, res);
});
router.get("/", async (req, res) => {

  controller.getAllProducts(req, res);
});
router.get("/:id", async (req, res) => {
 
  controller.getProductById(req, res);
});

router.put("/:id", async (req, res) =>{
  controller.updateProduct(req, res); });
  
router.delete("/:id", async (req, res) =>{
  controller.deleteProduct(req, res);
});

module.exports = router;