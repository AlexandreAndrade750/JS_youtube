// tipos de variáveis
//let idade = 18;
//let nome = 'Alexandre';
//let logado = true;

// arrays and objects

// let ingredientes = ["carne", "arroz", "feijão", "batata"];
// let personagem = {nome: "Alexandre", idade: 25, altura: 1.80};

// console.log(personagem.nome);

// Funções
// function somar(a, b) {
//  let resultado = a + b;
//  return resultado;
//}

//let x = somar(10, 200);
//console.log(x);

// Condicionais
// let idade = 15;
// let nome = 'Alexandre';
// let logado = true;

// if (idade >= 18) {
// console.log(`${nome} é maior de idade.`);
// } else {
// console.log(`${nome} é menor de idade.`);
// }

// Arrays and Objects
//let ingredients = ["Farinha", "Ovos", "Açucar", "Leite", "Chocolate"];
//let person = {
//  nome: "Alexandre",
//  nivel: 10,
//  forca: 800,
//  magia: 200,
//  vida: 1000,
//  mana: 200,
//};

//function somar(a, b) {
//  let resultado = a + b;
//  return resultado;
//}


//let x = somar(10, 20);
//let y = somar(5, 200);

//console.log(y);
//console.log(x);

//if (idade >= 18) {
//console.log(`${nome} é maior de idade.`);
//} else {
//console.log(`${nome} é menor de idade.`);
//}

//let lista = ['Alexandre', 'Maria', 'João', 'Pedro'];

//for (let item of lista){
//  console.log("- Participante: " + item)
//}

//function avisar(){
//  alert("Você clicou no botão")
//}

//let botao = document.querySelector("#botao")

//botao.addEventListener("mouseover", () => {
//  avisar()
//})

//let usdInput = document.querySelector("#usd")
//let brlInput = document.querySelector("#brl")

//usdInput.addEventListener("keyup", () => {
//  console.log(usdInput.value)
//})  

//brlInput.addEventListener("keyup", () => {
//  console.log(brlInput.value)
//})

let dolar = 5.1

let usdInput = document.querySelector("#usd");
let brlInput = document.querySelector("#brl");

usdInput.addEventListener("keyup", () => {
  
})

brlInput.addEventListener("keyup", () => {
  
})  

usdInput.value = "1000,00";
convert("usd-to-brl");

// Funções
function formatCurrency(value){
  // ajustar o valor
  // Utilizar função de formatar
  // Retorna o valor formatado
}

function fixValue(value){
  let fixedValue = value.replace(",", ".")
  let floatValue = parseFloat(fixedValue)
  if(floatValue == NaN) {
    floatValue = 0
  }
  return floatValue
}



function convert(type){
if(type == "usd-to-brl"){
  // ajustar o valor
  // converter o valor
  // mostra no campo de REAL
}
if(type == "brl-to-usd"){
  // ajustar o valor
  // converter o valor
  // mostra no campo de DÓLAR
}
}