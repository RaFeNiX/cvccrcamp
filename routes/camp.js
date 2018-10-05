var express = require('express');
var router = express.Router();
var bracket = require('../modules/bracket')

router.get('/:hash?', function (req, res, next) {
    console.log()
    let chave = {
        "teams": [
            [{ name: "Team 1", flag: 'clone' }, { name: "Team 2", flag: 'giant' }],
            [{ name: "Team 3", flag: 'knight' }, { name: "Team 4", flag: 'guards' }]
        ],
        "results": [[[[null, null], [null, null]], [[null, null], [null, null]]]]
    },
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
});

router.post('/save', function (req, res, next) {
    console.log(req.body)
    res.send(req.body)
});

module.exports = router;
