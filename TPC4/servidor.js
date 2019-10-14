var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req,res){
    var pedido = req.url.split("/")
    var pag = pedido[pedido.length-1]
    console.log(pag)
    var file = ".//TPC4//XML//"+ pag + ".xml"
    console.log(file)
   fs.readFile(file, function(err, data){
    
   if(err){
       res.writeHead(200,{'content-Type': 'text/plain'})
       res.write("Ficheiro inexistente")
       res.end()
   }

   else{
    res.writeHead(200,{'content-Type': 'xml'})
    res.write(data)
    res.end()
    
   }
    
})
})

server.listen(7777)