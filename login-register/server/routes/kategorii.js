var express = require('express');
var router = express.Router();
const controller = require('../controllers/kategorii');
const jwt = require('express-jwt');
require('dotenv').config();

router
    .post('/', jwt({ secret: process.env.AUTH_SECRET, algorithms: ['HS256'] }), controller.createCategory)
    .get('/',jwt({ secret: process.env.AUTH_SECRET, algorithms: ['HS256'] }), controller.AllCategory)



module.exports = router;