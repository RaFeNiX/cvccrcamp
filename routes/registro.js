var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));

/* GET registro listing. */
router.get('/', function (req, res, next) {
    res.render('registro');
});

router.post('/', function (req, res) {
    console.log(req.body);
    res.send(req.body);
});
module.exports = router;
