//importing Express
const express = require('express');

//creating a router to redirect requests
const router = express.Router();

//importing the Product controller to redirect to perform the desired function
const productController = require('../controllers/productController');

//shows all Products
router.get('/',productController.showAllProducts);

//creating a new Product
router.post('/create',productController.createProduct);

//delete Product with given id
router.delete('/:id',productController.deleteProduct);

//update a Product with given id to the given quantity
router.post('/:id/update_quantity',productController.updateQuantity);

//exporting the router
module.exports = router;