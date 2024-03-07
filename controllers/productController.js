//controller to manage products

//importing Product model
const Product = require('../models/product');

//function to show all products available
module.exports.showAllProducts = async function(req, res){
    try{
        //fetching all available products from db
        let findProducts = await Product.find({});

        //formatting the data
        const formattedProducts = findProducts.map((findProduct, index) => ({
            id: findProduct.id,
            name: findProduct.name,
            quantity: findProduct.quantity
        }));
        
        //returning success status along with products
        return res.status(200).json({
            data : {
                products : formattedProducts
            },
            message: "Successfully fetched all available products"
        });

    }catch(err){
        //throws internal servor error on failure 
        return res.status(500).json({
            message: "Error in fetching products"
        });
    }
}

//function to create a new product
module.exports.createProduct = async function(req, res){
    try{
        //creating new product
        let newProduct = await Product.create({
            name : req.body.name,
            quantity : req.body.quantity
        });

        //saving the created product
        await newProduct.save();

        //returning success status along with newly created product
        return res.status(200).json({
            data : {
                Product : {
                    name : newProduct.name,
                    quantity : newProduct.quantity
                }
            },
            message : "Product Saved Successfully"
        });
    }catch(err){
        //throws internal servor error on failure 
        return res.status(500).json({
            message: "Error in saving product"
        });
    }
}

// function to delete product using id
module.exports.deleteProduct = async function(req, res){
    try{
        //extract the id from the URL passed through params
        const id = req.params.id;

        //fetching product thorugh id
        let product = await Product.findById(id);

        //if product not found
        if(!product){
            //throws requested source not found status code
            return res.status(404).json({
                message : "Product not found!"
            });
        }

        // if product found, deleting that particular product
        await product.deleteOne();

        // returning success status along with deleted product
        return res.status(200).json({
            data : {
                product : {
                    id : product.id,
                    name : product.name,
                    quantity : product.quantity
                }
            },
            message : "Product deleted successfully!"
        });
    }catch(err){
        //throws internal servor error on failure 
        return res.status(500).json({
            message: "Error in deleting product"
        });
    }
}

// function to update a product's quantity
module.exports.updateQuantity = async function(req, res){
    try{
        //extract the quantity id to update from the URL passed through query
        let updateQuantity = req.query.number;

        //extract the id from the URL passed through param
        const id = req.params.id;

        //fetching product through id
        let findProduct = await Product.findById(id);

        //if product not found
        if(!findProduct){
            //throws requested source not found status code
            return res.status(404).json({
                message : "Product not found!"
            });
        }

        //converting string to number of base 10
        updateQuantity = parseInt(updateQuantity, 10);

        //checking if the updateQuantity is number
        if(!isNaN(updateQuantity)){
            //updating the quantity of selected product
            findProduct.quantity += updateQuantity;

            //saving the updated product in db after updating quantity
            let updatedProduct = await findProduct.save();

            // returning success status along with updated product
            return res.status(200).json({
                data : {
                    product : {
                        id : updatedProduct.id,
                        name : updatedProduct.name,
                        quantity : updatedProduct.quantity
                    }
                },
                message: "Product updated successfully"
            });
        }else{
            // if updateQuantity provided is not a number 
            return res.status(400).json({
                message: "Please enter a Number to update quantity"
            });
        }
    }catch(err){
        //throws internal servor error on failure 
        return res.status(500).json({
            message: "Error in updating quantity of product"
        });
    }
}