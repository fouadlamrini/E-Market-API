const User = require("../models/userModel");
const BaseController = require('../core/BaseController');
class UserController extends BaseController {
async createUser(req, res) {
    const { fullname, email, password, role } = req.body;
    if (!fullname || !email || !password) {
        return res.status(400).json({ error: "fullname, email and password are required" });
    }

    try {
        const createdUser = await User.create({ fullname, email, password, role });
        res.status(201).json({
            message: "User created successfully",
            user: createdUser
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

}
module.exports = UserController;