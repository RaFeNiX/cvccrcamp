var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
// var participantes = require('../modules/register')

const Mongo = require('mongoose')

var db = Mongo.connection.openUri('mongodb://localhost/camps')
db.on('error', console.error.bind(console, 'Erro na conexao: '))
db.once('open', function () { console.log('Mongo participantes on') })

col = db.collection('participantes');


router.use(bodyParser.urlencoded({ extended: true }));

/* GET registro listing. */
router.get('/', function (req, res, next) {
    res.render('registro');
});

router.post('/', function (req, res) {
    col.insert({
        nome: req.body.nome,
        email: req.body.email,
        idClash: req.body.idClash
    })

    console.log("Registrado com sucesso");
    res.redirect('/registro');
});

module.exports = router;
