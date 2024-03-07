//require the library
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/ecommerce_api');   

// acquire the connection (to check if it is successful)
const db = mongoose.connection;

// error 
db.on('error',console.error.bind(console,'error connecting to database'));

//up and running then print the message
db.once('open', function(){
    console.log('successfully connected to database');
});

module.exports = db;