var obras = require('../Models/MusicasModel')

module.exports.listar = () => {
    return obras
        .find({},{'@id':1,titulo:1,tipo:1,compositor:1})
        .exec()
}

module.exports.listarId = id => {
    return obras
        .find({'@id': id})
        .exec()
}

module.exports.compo = () =>{
    return obras
    .find({compositor:1}).sort({compositor:1})
    .distinct('compositor')
    .exec()
}



 module.exports.listarComp = comp => {
     return obras
     .find({compositor:comp},{'@id':1,título:1})
     .exec()
 }

 module.exports.instrumento = inst => {
    return obras
    .find({'instrumentos.designacao':inst},{'@id':1,título:1})
    .exec()
}

module.exports.listarPartituras = () => {
    return obras
        .aggregate([
            {$unwind : "$instrumentos"},
            {$group: {
                _id: "$id",
                partitura: {$sum: 1},
                titulo: {$first: "$titulo"}
            }},
            {$project: {titulo:1, id:"$_id", _id:0, partitura:1}}
        ])
        
}


