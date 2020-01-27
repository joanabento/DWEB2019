var express = require('express');
var router = express.Router();
var Obra = require('../Controllers/MusicasController')
/* GET home page. */
router.get('/obras', function(req, res, next) {
  if(req.query.compositor == undefined && req.query.instrumento == undefined){
  Obra.listar()
  .then(dados=>{ res.jsonp(dados)})
  .catch(erro=>{res.jsonp(erro)})
  }
  if(req.query.compositor != undefined  && req.query.instrumento == undefined){
    Obra.listarComp(req.query.compositor)
    .then(dados=>{ res.jsonp(dados)})
    .catch(erro=>{res.jsonp(erro)})
  }
  if(req.query.compositor == undefined && req.query.instrumento != undefined){
    Obra.instrumento(req.query.instrumento)
    .then(dados=>{ res.jsonp(dados)})
    .catch(erro=>{res.jsonp(erro)})
  }
});


router.get('/obrasQuant', function(req, res, next) {
  Obra.listarPartituras()
  .then(dados=>{res.jsonp(dados)})
  .catch(erro=>{res.jsonp(erro)})
});


router.get('/obras/:id', function(req, res, next) {
  Obra.listarId(req.params.id)
  .then(dados=>{res.jsonp(dados)})
  .catch(erro=>{res.jsonp(erro)})
});

router.get('/compositores', function(req, res, next) {
  Obra.compo()
  .then(dados=>{res.jsonp(dados)})
  .catch(erro=>{res.jsonp(erro)})
});


module.exports = router;
