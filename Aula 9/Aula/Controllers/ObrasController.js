var Obra = require('../Models/ObrasModel')

module.exports.listar = () => {
    return Obra
        .find()
        .exec()
}
module.exports.Obra = () => {
    return Obra
        .find({},{year:1,category:1})
        .exec()
}
module.exports.consultar = id => {
    return Obra
        .findOne({'@id': id})
        .exec()
}

module.exports.consultarPeriodo = Peri =>{
    return Obra
    .find({periodo:Peri})
    .exec()
}


module.exports.consultarAno = () => {
    return Obra
        .find({},{anoCriacao:ano})
        .distinct('anoCriacao')
        .exec()
}

module.exports.consultarCompDur = function(Comp, Dur){
    return Obra
    .find({compositor:Comp, duracao:Dur})
    .exec()
}

module.exports.compositores = () => {
    return Obra
        .distinct('compositor')
        .exec()
}

module.exports.periodos = () => {
    return Obra
        .distinct('periodo')
        .exec()
}
