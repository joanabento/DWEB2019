var Obra = require('../Models/ObrasModel')

module.exports.listar = () => {
    return Obra
        .find({}, {'@id':1, titulo:1, tipo:1, compositor:1})
        .exec()
    
}

module.exports.consultar = id => {
    return Obra
        .findOne({'@id': id})
        .exec()
}

module.exports.listatip = () => {
    return Obra
        .find({}, {tipo:1})
        .distinct('tipo')
        .exec()
    
}

module.exports.listacompositor = function(comp) {
    return Obra
    .find({compositor:comp})
    .exec()
}

module.exports.listainst = inst =>{
    return Obra
    .find({'instrumentos.designacao':inst})
    .exec()
}

module.exports.listaobr = () => {
    return Obra
        .find({}, {id:1,titulo:1, num:{'instrumentos.partituras':{$sum:1}}})
        .exec()
    
}