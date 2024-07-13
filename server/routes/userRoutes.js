const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/',userController.homePage);
router.get('/products',userController.products);
router.get('/cart',userController.cart);
router.get('/blog',userController.blog);
router.get('/about',userController.about);
router.get('/contact',userController.contact);

module.exports = router;