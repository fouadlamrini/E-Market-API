const express = require('express');
const router = express.Router();
const UserController = require("../controllers/UserController");

router.post('/',async (req, res) => {
    const controller = new UserController(req, res);
    controller.createUser(req, res);
});

module.exports = router;