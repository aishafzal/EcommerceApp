const express = require("express");
const errormiddleware = require('./middleware/error')
const cookieParser = require("cookie-parser");
const app = express();
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload());



//Route import 
const product = require('./routes/productRoutes');
const user = require('./routes/userrout');
const order = require("./routes/orderRoutes");



const { json } = require("body-parser");
app.use('/api/v1',product);
app.use('/api/v1',user);
app.use('/api/v1',order);
//middlewear for error
app.use(errormiddleware);


module.exports =app;