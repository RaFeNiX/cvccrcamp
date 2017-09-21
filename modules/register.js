
const Mongo = require('mongoose')
var db;

var db = Mongo.connection.openUri('mongodb://localhost/camps')
db.on('error', console.error.bind(console, 'Erro na conexao: '))
db.once('open', function () { console.log('Mongo participantes on') })

module.exports = db.collection('participantes');