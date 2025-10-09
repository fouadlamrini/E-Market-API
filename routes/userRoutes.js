const express = require("express");
const UserController = require("../controllers/UserController");
const router = express.Router();

const controller = new UserController();

router.post("/", async (req, res) => {
  controller.createUser(req, res);
});
router.get("/getAllUser", async (req, res) => {
 
  controller.getAllUsers(req, res);
});
router.get("/getOneUser/:id", async (req, res) => {
  
  controller.getUserById(req, res);
});

router.delete('/deleteUser/:id', async (req, res) =>{
  controller.deleteUser(req, res);
});

router.put('/updateUser/:id', async (req, res) =>{
  controller.updateUser(req, res); })

module.exports = router;
