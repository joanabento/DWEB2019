const mongoose = require('mongoose')

var InstrumentoSchema = new mongoose.Schema({
  designacao: String,
  partitura: String
  });

var ObraSchema = new mongoose.Schema({
    id: String,
    titulo: String,
    tipo: String,
    compositor: String,
    instrumentos: InstrumentoSchema
  });



module.exports = mongoose.model('musicas', (ObraSchema, InstrumentoSchema))