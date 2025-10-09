const express = require("express");
const UserController = require("../controllers/UserController");
const router = express.Router();

const controller = new UserController();

router.post("/", async (req, res) => {
  controller.createUser(req, res);
});
router.get("/getAllUser", async (req, res) => {
  // const controller = new UserController(req, res);
  controller.getAllUsers(req, res);
});
router.get("/getOneUser/:id", async (req, res) => {
  // const controller = new UserController(req, res);
  controller.getUserById(req, res);
});

module.exports = router;
