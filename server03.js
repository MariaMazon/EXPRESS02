//colocando os parâmetros nas rotas

const express=require('express');

const app = express();

app.listen(3000,()=>{
    console.log("Servidor em execução");
})


//rotas 

app.get('/',(req,res)=>{
    res.send("teste1");
})

//rotas com 1 parâmetro
app.get('/ola/:nome',(req,res)=>{
    res.send("teste2 "+req.params.nome);
})


//rotas com 2 parâmetro
app.get('/ola/:nome/:empresa',(req,res)=>{
    res.send("teste3 "+req.params.nome+ " da empresa "+ req.params.empresa);
})

//rota com soma
app.get('/soma/:a/:b',(req,res)=>{
    res.send("Resultado da soma é: "+(parseInt(req.params.a)+parseInt(req.params.b)));
})