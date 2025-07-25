const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const {userAuth,checkUser} = require("../../middleware/authMiddleware");
const {check,validationResult} = require("express-validator");

router.get("*",checkUser);
//web pages routes
router.get('/',userController.homePage);
router.get('/products',userAuth,userController.products);   
router.get('/cart',userController.cart);
router.get('/blog',userController.blog);
router.get('/about',userController.about);
router.get('/contact',userController.contact);
router.get('/user-login',userController.userLogin);
router.get('/user-signup',userController.userSignup);
router.get('/account-details',userController.accountDetails);

//user authentication routes
router.post('/user-signup',userController.userSignupPost);
router.post('/user-login',userController.userLoginPost);
router.get('/verify/:userId/:uniqueString',userController.verifyUserEmail)
router.get('/verified',userController.emailVerified);
router.post("/verifyOTP/:userId",userController.OTPVerification);
router.get('/logout',userController.userLogout)


module.exports = router;