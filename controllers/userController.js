const User = require("../models/userModel");
const mongoose = require("mongoose");
const BaseController = require('../core/BaseController');
class UserController extends BaseController {
async createUser(req, res,next) {
    const { fullname, email, password, role } = req.body;
    if (!fullname || !email || !password) {
        return res.status(400).json({ error: "fullname, email and password are required" });
    }

    try {

           const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ error: "Email already Exist" });
        }

        const createdUser = await User.create({ fullname, email, password, role });
        res.status(201).json({
            message: "User created successfully",
            user: createdUser
        });
    } catch (error) {
       next(error);
    }
}

async  getAllUsers(req, res,next) {
    try {
        const users = await User.find(); 
        res.status(200).json(users); 
    } catch (error) {
         next(error);
    }
}

async getUserById(req, res,next) {
    try {
        const { id } = req.params; 
        
           if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid User ID" });
        }

        const user = await User.findById(id); 
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
         next(error);
    }
}

async deleteUser(req, res,next) {
    try {
        const { id } = req.params;

           if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid User ID" });
        }

        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        await User.findByIdAndDelete(id);
        res.status(204).send(); 
    } catch (error) {
         next(error);
    }
}
async updateUser(req, res,next) {
    try {
        const { id } = req.params;
        const { fullname, email, password, role } = req.body;

           if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid User ID" });
        }
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }


        if (fullname !== undefined) user.fullname = fullname;
        if (email !== undefined) user.email = email;
        if (password !== undefined) user.password = password;
        if (role !== undefined) user.role = role;

        const updatedUser = await user.save();

        res.status(200).json({
            message: "User updated successfully",
            user: updatedUser
        });
    } catch (error) {
         next(error);
    }
}


}
module.exports = UserController;