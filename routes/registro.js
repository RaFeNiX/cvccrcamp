const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const participantes = require('../modules/register');
const _ = require('lodash');

const fs = require('fs');
var cards = [];

fs.readdir('./public/images/cards/', (err, files) => {
    cards = _.map(files, (cardName) => {
        return {
            name: cardName,
            isUsed: _.random(true, false)
        }
    });
})

router.use(bodyParser.urlencoded({ extended: true }));

/* GET registro listing. */
router.get('/', function (req, res, next) {
    res.render('registro', {
        title: 'Cadastro',
        cards: cards,
        avatar: cards[0]
    });
});

router.post('/', function (req, res) {

    participantes.insert({
        nome: req.body.nome,
        carta: req.body.carta,
        email: req.body.email,
        idClash: req.body.idClash
    })

    console.log("Registrado com sucesso");
    res.redirect('/registro');

});


module.exports = router;
