const express = require('express')
const router = express.Router();
const { model } = require('mongoose');

const authController = require('../controlers/auth')

router.post('/login', authController.Login);
router.post('/signup', authController.SignUp);
//router.get('/me',authController.Me);


module.exports = router;