const Caixaprincipal =document.querySelector(".Caixa-principal");
const Caixapergunta =document.querySelector(".Caixa-pergunta");
const Caixaalternativa =document.querySelector(".Caixa-alternativa");
const Caixaresposta =document.querySelector(".Caixa-resposta");
const Textoresultado =document.querySelector(".Texto-resultado");

const perguntas = [
   {
    enunciado: "pergunta 1?", 
    alternativas: [
       "alternartiva 1.;",
    "alternativa 2"
      ]
},
{
      enunciado: "pergunta 2 ", 
      alternativas: [
      "alternativa 1",
      "alternativa 2"
        
    ]
},
{
   enunciado: "pergunta 3 ", 
   alternativas: [
   "alternativa 1",
   "alternativa 2"
     
 ]
},
{
   enunciado: "pergunta 4 ", 
   alternativas: [
   "alternativa 1",
   "alternativa 2"
     
 ]
},

];

let Atual = 0;
let perguntaAtual;

function mostraPergunta(){
   perguntaAtual = perguntas[Atual];
   Caixapergunta. textContent = perguntaAtual.enunciado;
   mostraAlternativas();
}

function mostraAlternativas(){
      for(const alternativa of perguntaAtual.alternativas){
         const botaoAlternativas = document.createElement("button");
         botaoAlternativas.textContent = alternativa;
         Caixaalternativas.appendChild(botaoAlternativas);
      }

}
mostraPergunta();
