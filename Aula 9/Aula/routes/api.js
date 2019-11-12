var express = require('express');
var router = express.Router();
var obras = require('../Controllers/ObrasController')
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('ola')
  if(req.query.compositor!=undefined && req.query.duracao!=undefined){
    obras.consultarCompDur(req.query.compositor, req.query.duracao)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
  }
  if(req.query.periodo!=undefined){
    obras.consultarPeriodo(req.query.periodo)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
  }

  if (req.query.ano==undefined) {
    obras.listar()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
}
  if(req.query.ano!= undefined){
    obras.consultarAno(req.query.ano)
    .then(dados=> res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
  }
});


router.get('/compositores', function(req, res, next) {
  console.log('saddsadsa')
  obras.compositores()
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
})

router.get('/periodos', function(req, res, next) {
  console.log("ola")
  obras.periodos()
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
})
 
router.get('/:id', function(req,res,next){
  obras.consultar(req.params.id)
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
})


module.exports = router;
