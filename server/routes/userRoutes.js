const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/',userController.homePage);
router.get('/products',userController.products);
router.get('/cart',userController.cart);
router.get('/blog',userController.blog);
router.get('/about',userController.about);
router.get('/contact',userController.contact);
router.get('/user-login',userController.userLogin);
router.get('/user-signup',userController.userSignup);

module.exports = router;