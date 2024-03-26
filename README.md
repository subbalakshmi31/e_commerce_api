# E-Commerce-API

# ABOUT
This is an E-commerce API project made using Node.Js, ExpressJs & MongoDB. 

STEPS TO USE THE API:
1) Initialize the project by running the "npm init" command in the terminal within the project directory.
2) Start the server using the command "node index.js".
3) Open Postman.
4) Send a GET request to "localhost:3000/products".
5) View the available products.

STEPS TO CREATE A NEW PRODUCT: 
1) start the server using node app.js
2) Open postman
3) Make a POST request to localhost:3000/products/create url. 
4) Select Body tab below the url textarea and then select x-www-form-urlencoded
5) Add name & quantity as the keys and set the desired values for the keys.
6) If you recieve the message saying new product added successfully then you have done everything correct.
7) The product is created. Check it out by making a GET request at localhost:3000/products

1) Start the server by running "node index.js".
2) Open Postman.
3) Send a POST request to "localhost:3000/products/create" URL.
4) Choose the Body tab and select x-www-form-urlencoded.
5) Use "name" and "quantity" as keys and set the desired values.
6) If we recieve "Product Saved Successfully" message along with the created product data, product is successfully created
7) Verify the product creation by sending a GET request to "localhost:3000/products".

STEPS TO DELETE A PRODUCT:
1) Copy the object id of the product to be deleted.
2) add the ID after "localhost:3000/products/".
3) Send a DELETE request.
4) Upon successful deletion, we will get "Product deleted successfully" message along with the deleted product

STEPS TO UPDATE THE QUANTITY OF A PRODUCT:
1) Copy the object id of the product whose quantity to be updated.
2) add the id after "localhost:3000/products/".
3) After the id, add "/update_quantity/?number={x}" in the URL, where {x} represents the quantity change.
4) The URL format should be "localhost:3000/products/{id}/update_quantity/?number={x}".
5) Send a POST request, we will get "Product updated successfully" along with the updated product and its quantity upon successful update.

# TECHSTACK
Node.Js, ExpressJs, MongoDB
