const express = require("express");
const app = express();

app.get("/",function(req,res){
     res.send("Bem vindo ao site")
})
app.get("/sobre",function(req,res){
     res.send("Trabalho de nuvem da AV2")
})
app.get("/sobre/:aluno",function(req,res){
     res.send("Trabalho de av2 do(a) Aluno(a): " + req.params.aluno)
})

app.listen(4000,function(erro){
     if(erro){
          console.log("Erro ao iniciar")
     }else{
          console.log("Servidor iniciado")
     }
})