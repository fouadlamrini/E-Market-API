const express = require('express');
const router = express.Router();
const UserController = require("../controllers/UserController");

router.post('/',async (req, res) => {
    const controller = new UserController(req, res);
    controller.createUser(req, res);
});
router.get('/getAllUser',async (req, res) => {
    const controller = new UserController(req, res);
    controller.getAllUsers(req, res);
});
router.get('/getOneUser/:id',async (req, res) => {
    const controller = new UserController(req, res);
    controller.getUserById(req, res);
});

module.exports = router;