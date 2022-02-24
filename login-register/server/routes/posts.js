var express = require('express');
var router = express.Router();
const controller = require('../controllers/posts');
const jwt = require('express-jwt');
require('dotenv').config();

router
    .post('/', jwt({ secret: process.env.AUTH_SECRET, algorithms: ['HS256'] }), controller.create)
    .get('/', controller.returnAll)
    .get('/:id', controller.returnOne)
    .get('/:id', controller.getByID)
    .get('/users/:id', controller.getByUser)
    .delete('/:id', controller.delete)
    .post('/:id/sentiment', jwt({ secret: process.env.AUTH_SECRET, algorithms: ['HS256'] }), controller.sentiment)
    



module.exports = router;