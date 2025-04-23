const express = require("express"); //importa o mÃ³dulo express neste arquivo
const app = express(); //iniciando o express

//criando a rota inicial
app.get("/", function(req,res){
    res.send("<h1>Está funcionando!</h1>");
})

//rota 01
app.get("/rota01", function(req,res){
    res.send("<h1>Essa é a primeira rota!</h1>");
})

//rota 02
app.get("/rota02", function(req,res){
    res.send("<h1>Essa é a segunda rota!</h1>");
})

//rota com parametro 
app.get("/rota/:parametro", function(req,res){
    res.send("Essa rota leva para: " + req.params.parametro);
})

app.listen(process.env.PORT ?? 3000,function(erro){  // cria a aplicaÃ§Ã£o na porta 3000
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado.");
    }
})
