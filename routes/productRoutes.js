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
  // const controller = new UserController(req, res);
  controller.getProductById(req, res);
});

module.exports = router;