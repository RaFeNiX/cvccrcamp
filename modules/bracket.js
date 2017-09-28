const Promise = require('bluebird')
const Mongo = require('mongoose')
const crypto = require('crypto')

let db = Mongo.connection.openUri('mongodb://localhost/camps')
db.on('error', console.error.bind(console, 'Erro na conexao: '))
db.once('open', function () { console.log('Mongo on') })
let col = db.collection('CVCCamp')

let bracket = {
    listCamps: () => {
        return col.find(find({},{Nome:1,_id: 0}))
    },
    createCamps: (campName,campObj) => {
        let current_date = (new Date()).valueOf().toString();
        let random = Math.random().toString();        
        col.insert({
            CampId: crypto.createHash('sha1').update(current_date + random).digest('hex'),
            Nome: campName, 
            CampSchema: JSON.stringify(campObj)
        })
    },
    getCampById: (id) => {
        return col.findOne({
            CampId: id
        })
    },
    updateCamps: (id,CampObj) => {
        col.update(
            {CampId: id},
            {$set : { CampSchema: JSON.stringify(CampObj) } } 
        )
    }
}
module.exports = bracket; 