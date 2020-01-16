const mongoose = require('mongoose')

var InstrumentoSchema = new mongoose.Schema({
  designacao: String,
  partitura: String
  });

var ObraSchema = new mongoose.Schema({
    id: String,
    titulo: String,
    tipo: Array,
    compositor: Array,
    instrumentos: InstrumentoSchema
  });



module.exports = mongoose.model('obra', (ObraSchema, InstrumentoSchema))