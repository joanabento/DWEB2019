const mongoose = require('mongoose')

var ObrasSchema = new mongoose.Schema({
    id: String,
    nome: String,
    desc: String,
    anoCriacao: String,
    periodo: String,
    compositor: String,
    duracao: String
})



module.exports = mongoose.model('obra', ObrasSchema)
