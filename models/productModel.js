const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    title : String,
    description : String,
    price : Number ,
    stock : Number ,
    category  : String,
    imageUrl  : String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Product", productSchema);