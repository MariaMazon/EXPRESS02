// rotas com hífens e pontos 
const express=require('express');

const app = express();

app.listen(3000,()=>{
    console.log("Servidor no ar");
})

// rotas base 
app.get('/',(req,res)=>{
    res.send("Teste com parâmetro");
})

//rotas com hífen 
app.get('/distancia/:pontoA-:pontoB',(req,res)=>{
    const pontoA=req.params.pontoA;
    const pontoB=req.params.pontoB;

    const distancia=pontoB-pontoA;

    res.send(` A distancia entre ponto ${pontoA} e ${pontoB} é ${distancia}`);
})

app.get('/distancia/:pontoA.:pontoB',(req,res)=>{
    const pontoA=req.params.pontoA;
    const pontoB=req.params.pontoB;

    const distancia=pontoB-pontoA;

    res.send(` A distancia entre ponto ${pontoA} e ${pontoB} é ${distancia}`);
})