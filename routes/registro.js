var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var participantes = require('../modules/register')
router.use(bodyParser.urlencoded({ extended: true }));

/* GET registro listing. */
router.get('/', function (req, res, next) {
    res.render('registro', {
        title: 'Cadastro'
    });
});

router.post('/', function (req, res) {
    participantes.insert({
        nome: req.body.nome,
        email: req.body.email,
        idClash: req.body.idClash
    })

    console.log("Registrado com sucesso");
    res.redirect('/registro');
});

module.exports = router;
