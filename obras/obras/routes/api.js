var express = require('express');
var router = express.Router();
var obr = require('../Controllers/ObrasController')
/* GET home page. */
router.get('/obras', function(req, res, next) {
  if(req.query.compositor == undefined && req.query.instrumento ){
  obr.listar()
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
 }

  else if(req.query.compositor != undefined && req.query.instrumento == undefined){
    obr.listacompositor(req.query.compositor)
    .then(dados=> res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
  }

  else if(req.query.compositor == undefined && req.query.instrumento != undefined){
    obr.listainst(req.query.instrumento)
    .then(dados=> res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
  }
 })

  router.get('/obrasQuant', function(req, res, next) {
    obr.listaobr()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
    })

    router.get('/tipos', function(req, res, next) {
      obr.listatipo()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
      })
  router.get('/obras/:id', function(req,res,next){
    obr.consultar(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
  })

module.exports = router;
