var express = require('express');
var router = express.Router();
var axios = require('axios')
const apikey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ'
/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get('http://clav-api.dglab.gov.pt/api/entidades?apikey='+ apikey)
  .then(dados=>res.render('index',{lista:dados.data}))
  .catch(erro=>res.status(500).jsonp(erro))
})

router.get('/entidades/:id',function(req,res,next){
  console.log(req.params.id)
  axios.get('http://clav-api.dglab.gov.pt/api/entidades/'+ req.params.id + '?apikey='+ apikey)
  .then(dados=>{
    axios.get('http://clav-api.dglab.gov.pt/api/entidades/' + req.params.id + '/tipologias?apikey='+ apikey)
    .then(dadostipo=>{
      axios.get('http://clav-api.dglab.gov.pt/api/entidades/' + req.params.id + '/intervencao/dono?apikey='+ apikey)
      .then(dadosinte=>{
        axios.get('http://clav-api.dglab.gov.pt/api/entidades/' + req.params.id + '/intervencao/participante?apikey='+ apikey)
        .then(dadospart=>{
          console.log(dados.data)
          console.log(dadostipo.data)
          console.log(dadosinte.data)
          console.log(dados.part)
          res.render('tipologia',{lista:dados.data,lista1:dadostipo.data,lista2:dadosinte.data,lista3:dadospart.data})
        })
        .catch(erro=>{
          res.jsonp(erro)
        })
      })
      .catch(erro=>{
        res.jsonp(erro)
      })
    })
    .catch(erro=>{
      res.jsonp(erro)
    })
  })
  .catch(erro=>{
    res.jsonp(erro)
  })
  router.get('/enti/:id', function(req,res,next){
    axios.get("http://clav-api.dglab.gov.pt/api/entidades/" + req.params.id + apikey)
    .then(dados=>{
      console.log(dados.data)
      res.render('entidade', {lista:dados.data} )
    })
})
})

module.exports = router;
