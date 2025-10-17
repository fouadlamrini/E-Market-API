const express = require("express");
const ProductController = require("../controllers/ProductController");
const router = express.Router();
const controller = new ProductController();

/**
 * @swagger
 * /product:
 *   post:
 *     summary: Créer un nouveau produit
 *     tags:
 *       - Products
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - price
 *               - stock
 *               - category
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               stock:
 *                 type: number
 *               category:
 *                 type: string
 *               imageUrl:
 *                 type: string
 *     responses:
 *       201:
 *         description: Produit créé avec succès
 *       400:
 *         description: Données invalides ou manquantes
 */

//=============================================
router.post("/", async (req, res,next) => {

  try{
    await controller.createProduct(req, res);
  }catch(err){
    next(err);
  }

});
//==========================================
/**
 * @swagger
 * /products:
 *   get:
 *     summary: Récupérer tous les produits
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: Liste des produits
 */

router.get("/", async (req, res,next) => {
  try{
    await controller.getAllProducts(req, res);
  }catch(err){
    next(err);
  }
  
});


//====================================================
/**
 * @swagger
 * /products/search:
 *   get:
 *     summary: Rechercher des produits par mot clé
 *     tags:
 *       - Products
 *     parameters:
 *       - in: query
 *         name: q
 *         required: true
 *         schema:
 *           type: string
 *         description: Mot clé pour la recherche
 *     responses:
 *       200:
 *         description: Produits correspondant à la recherche
 */

router.get("/search", async (req, res, next) => {
  controller.searchProducts(req, res, next);
});
module.exports = router;
//============================================
/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Récupérer un produit par ID
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: L'ID du produit
 *     responses:
 *       200:
 *         description: Produit trouvé
 *       404:
 *         description: Produit non trouvé
 */

router.get("/:id", async (req, res,next) => {
  try{
    controller.getProductById(req, res);
  }catch(err){
    next(err);
  }
  
});
//=============================================

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Mettre à jour un produit
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: L'ID du produit à mettre à jour
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               stock:
 *                 type: number
 *               category:
 *                 type: string
 *               imageUrl:
 *                 type: string
 *     responses:
 *       200:
 *         description: Produit mis à jour
 *       404:
 *         description: Produit non trouvé
 */
router.put("/:id", async (req, res,next) =>{
  try{
    await controller.updateProduct(req, res);
  }catch(err){
    next(err);
  }
   });
   //=============================================
   /**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Supprimer un produit
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: L'ID du produit à supprimer
 *     responses:
 *       200:
 *         description: Produit supprimé
 *       404:
 *         description: Produit non trouvé
 */
 
router.delete("/:id", async (req, res,next) =>{
  try{
    await controller.deleteProduct(req, res);
  }catch(err){
    next(err);
  }
  
});

