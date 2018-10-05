const Promise = require('bluebird')
const Mongo = require('mongoose')
const Crypto = require('crypto')

var db = Mongo.connection.openUri('mongodb://localhost/camps')
db.on('error', console.error.bind(console, 'Erro na conexao: '))
db.once('open', function () { console.log('Mongo on') })


let bracket = function (){
    col = db.collection('CVCCamp');
    listCamps: () => {
        return col.find(find({},{Nome:1,_id: 0}))
    }
    createCamps: (campName,campObj) => {
        let current_date = (new Date()).valueOf().toString();
        let random = Math.random().toString();        
        col.insert({
            CampId: crypto.createHash('sha1').update(current_date + random).digest('hex'),
            Nome: campName, 
            Camp: campObj
        })
    }
    getCampById: (id) => {
        return col.find({
            CampId: id
        })
    }
    updateCamps: (CampId,CampObj) => {
        col.findOneAndUpdate(
            {CampId: id},
            CampObj
        )
    }
}
module.exports = bracket; 