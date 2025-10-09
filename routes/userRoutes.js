const express = require("express");
const UserController = require("../controllers/UserController");
const router = express.Router();

const controller = new UserController();

router.post("/", async (req, res, next) => {
  try{
    await controller.createUser(req, res);
  } catch(err){
    next(err);
  }
});

router.get("/", async (req, res,next) => {
 try{
  await controller.getAllUsers(req, res);
 }catch(err){
  next(err);
 }
  
});
router.get("/:id", async (req, res, next) => {
  try{
    await controller.getUserById(req, res);
  }catch(err){
    next(err);
  }
  
});

router.delete('/:id', async (req, res, next) =>{
  try{
    await controller.deleteUser(req, res);
  }catch(err){
    next(err);
  }
  
});

router.put('/:id', async (req, res, next) =>{
try{
  controller.updateUser(req, res); 
}
catch(err){
  next(err);
}
})

module.exports = router;
