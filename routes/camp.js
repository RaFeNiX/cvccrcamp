var express = require('express');
var router = express.Router();
var bracket = require('../modules/bracket.js')

/* GET home page. */
router.get('/:hash?', function (req, res, next) {
    bracket.getCampById('8c347eda57ccca3be7f08b5d20386124b39bfc12').then(balbino => {
        let chave = JSON.parse(balbino.CampSchema),
            renderizar = req.params.hash === 'banzai2004' ? `
        function saveFn(data, userData) {
            console.log('save ', typeof (data), JSON.stringify(data));
        }
            containerObj.userData = "http://localhost:3000/";
            containerObj.save = saveFn;
        `: ''
        renderizar += `
        containerObj.init = ${JSON.stringify(chave)} 
        container.bracket(containerObj);
        $("#what").html('');
        `
        res.render('camp', {
            title: "CRCVC v1",
            admin: renderizar
        })
    })


});

router.post('/save', function (req, res, next) {
    try {
        console.log(req.body)
        bracket.updateCamps('8c347eda57ccca3be7f08b5d20386124b39bfc12', req.body)
        res.send(req.body)
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;
