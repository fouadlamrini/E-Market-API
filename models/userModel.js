const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    fullname: String,
    email: String,
    password: String,
    role: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("User", userSchema);