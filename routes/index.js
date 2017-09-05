var express = require('express');
var router = express.Router();
var bkt = require('jquery-bracket');



/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  console.log(bkt);
});

module.exports = router;
