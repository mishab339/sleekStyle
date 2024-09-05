if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const express = require('express');
const path = require('path');
const app = express();
const expressLayout = require('express-ejs-layouts');

app.set('view engine','ejs');
app.set('layout','layouts/layout');

app.use(express.urlencoded({extended:true}));
app.use(expressLayout)
app.use(express.static('public'));

//for accepting port from data
const bodyParser = express.json
app.use(bodyParser());

//routes
const userRouter = require('./server/routes/userRoutes.js');

app.use('/',userRouter);

app.listen(process.env.PORT||3000,()=>{
    console.log(`server started on port number ${process.env.PORT}`);
});