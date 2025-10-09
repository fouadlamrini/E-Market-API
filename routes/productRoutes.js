const express = require("express");
const ProductController = require("../controllers/ProductController");
const router = express.Router();
const controller = new ProductController();
router.post("/", async (req, res) => {
  controller.createProduct(req, res);
});
router.get("/getAllProduct", async (req, res) => {

  controller.getAllProducts(req, res);
});
router.get("/getOneProduct/:id", async (req, res) => {
 
  controller.getProductById(req, res);
});

router.put("/updateProduct/:id", async (req, res) =>{
  controller.updateProduct(req, res); });
  
router.delete("/deleteProduct/:id", async (req, res) =>{
  controller.deleteProduct(req, res);
});

module.exports = router;