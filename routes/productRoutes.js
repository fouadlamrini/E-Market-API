const express = require("express");
const ProductController = require("../controllers/ProductController");
const router = express.Router();
const controller = new ProductController();

//=============================================
router.post("/", async (req, res,next) => {

  try{
    await controller.createProduct(req, res);
  }catch(err){
    next(err);
  }
//==========================================
});
router.get("/", async (req, res,next) => {
  try{
    await controller.getAllProducts(req, res);
  }catch(err){
    next(err);
  }
  
});


//====================================================
router.get("/search", async (req, res, next) => {
  controller.searchProducts(req, res, next);
});
module.exports = router;
//============================================
router.get("/:id", async (req, res,next) => {
  try{
    controller.getProductById(req, res);
  }catch(err){
    next(err);
  }
  
});
//=============================================
router.put("/:id", async (req, res,next) =>{
  try{
    await controller.updateProduct(req, res);
  }catch(err){
    next(err);
  }
   });
   //=============================================
  
router.delete("/:id", async (req, res,next) =>{
  try{
    await controller.deleteProduct(req, res);
  }catch(err){
    next(err);
  }
  
});

