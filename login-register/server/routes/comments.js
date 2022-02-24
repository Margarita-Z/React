var express = require('express');
var router = express.Router();
const controller = require('../controllers/comments');
const jwt = require('express-jwt');
require('dotenv').config();

router
    .post('/', jwt({ secret: process.env.AUTH_SECRET, algorithms: ['HS256'] }), controller.createComment)
    .get('/',controller.AllComment)
    



module.exports = router;