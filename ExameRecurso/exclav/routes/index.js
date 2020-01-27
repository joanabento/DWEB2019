var express = require('express');
var router = express.Router();
var axios = require('axios')
const apikey = '?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ'


router.get('/', function(req, res, next) {
  axios.get('http://clav-api.dglab.gov.pt/api/legislacao' + apikey)
  .then(dados=>{
    res.render('index', { lista: dados.data});
  })
  .catch(erro=>res.render('erro',{error: erro}))
});

router.get('/diploma/:id', function(req, res, next) {
  axios.get(' http://clav-api.dglab.gov.pt/api/legislacao/'+ req.params.id + apikey)
  .then(diploma=>{
    console.log(diploma.data)
    axios.get('http://clav-api.dglab.gov.pt/api/legislacao/' + req.params.id + '/processos' + apikey)
    .then(processos=>{
          console.log(processos.data)
          res.render('diploma', { lista: diploma.data,lista1:processos.data});
        })
        .catch(erro=>res.render('error',{error:erro}))
      })
      .catch(erro=>res.render('error',{error:erro}))
})





/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


