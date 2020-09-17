let router = require('express').Router();
let authController = require('../controllers/AuthController');
let authValidator = require('../validators/AuthValidators');
let passport = require('passport');
const {userAuthCheck} = require('../checkAuth');






module.exports = router;