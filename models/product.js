//importing mongoose
const mongoose = require('mongoose');

//creating a schema for product
const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    quantity : {
        type : Number,
        required : true
    }
}, {
    timestamps : true, //for updating updated at and created at
});

//creating a model with the created schema
const Product = mongoose.model('Product',productSchema);

//exporting the model
module.exports = Product;