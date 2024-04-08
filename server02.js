const express=require('express');

var morgan = require('morgan');

const server=express();

server.listen(3000);

//criar os arquivos de logs
// server.use(morgan('tiny'));

server.use(morgan('Método= :method | Status= :status | URL= :url'));

server.get('/',(req,res)=>{
    res.send("Teste")
})