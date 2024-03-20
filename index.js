//importing required packages
const express = require('express');
const db = require('./config/mongoose');

const port = 8000;
const app = express();

// used as middleware, for parsing form data to req as req.body as json
app.use(express.urlencoded({extended:true}));

//using express router
app.use('/products', require('./routes/product_api'));

app.listen(port, function(err) {
    if(err){
        console.log(`Error in running the server : ${err}`);
    }
    console.log(`Server is running on port : ${port}`); //interpolation
})