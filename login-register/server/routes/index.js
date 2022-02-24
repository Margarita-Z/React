var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.send('My first payments app');
});

module.exports = router;
