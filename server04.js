// exercicio simples com parâmetro 

const express=require('express');

const app = express();

app.listen(3000,()=>{
    console.log("Servidor em execução");
})

// dados dos clientes
const clientes=[
    {id:1, nome:"Amanda", telefone:"11111111", email: "amanda@gmail.com"},
    {id:2, nome:"Beatriz", telefone:"22222222", email: "beatriz@gmail.com"},
    {id:3, nome:"Cássio", telefone:"33333333", email: "cassio@gmail.com"},
    {id:4, nome:"Daniel", telefone:"44444444", email: "daniel@gmail.com"},
    {id:5, nome:"Eduarda", telefone:"55555555", email: "eduarda@gmail.com"}
]

// rotas
app.get('/',(req,res)=>{
    res.send("API de clientes");
})

// rota com total de clientes
app.get('/total_clientes',(req,res)=>{
    res.send("O total de clientes é "+clientes.length);
})

//rota para cliente esnespecificos

app.get('/clientes/:id',(req,res)=>{
    const cliente=clientes.find(c=>c.id===parseInt(req.params.id));

    // se não existir o cliente 
    if(!cliente) res.status(404).send('Cliente não encontrado');

    // o cliente existe e deve apresentar as suas informações

    res.send(`O cliente é: ${cliente.nome}, telefone: ${cliente.telefone}, e email: ${cliente.email}`)
})

