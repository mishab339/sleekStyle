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

const indexRouter = require('./server/routes/userRoutes.js');

app.use('/',indexRouter);

app.listen(process.env.PORT||3000,()=>{
    console.log('server started...');
});