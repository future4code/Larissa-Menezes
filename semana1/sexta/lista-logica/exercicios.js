// Exemplos

// Exercício 0A

function soma(num1, num2) {
const num1 = 1
const num2 = 3
   return num1 + num2
}
console.log(soma)

// Exercício 0B

function imprimeMensagem() {
   const mensagem = prompt('Digite uma mensagem!')
     console.log(mensagem)
}

// Exercícios

//Exercício 1

function calculaAreaRetangulo(altura, largura) {
   const area = altura * largura
   console.log(area)
   return area
}
const areaRetangulo = calculaAreaRetangulo(2, 4)
console.log(areaRetangulo)



//Exercício 2

function imprimeIdade(idade) {
   console.log(`VocÊ tem ${idade} anos`)
}
const idadeUsuario = prompt(`Qual a sua ${idade} ?`)
imprimeIdade(idadeUsuario)
imprimeIdade('Rafaela')

//Exercício 3

function calculaIMC(peso, altura) {
  const imc = peso * altura
  console.log(imc)
  return imc

}


//Exercício 4

function imprimeInformacoesUsuario(nome, idade, email) {
   
   console.log("Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}")
}

imprimeInformacoesUsuario('Alice', (28), (alice@gmail.com) )


//Exercício 5

function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
   console.log(`minha cores favoritas são ${cor1}, ${cor2}, ${cor3}`)
}
const cores = prompt('Quais são suas cores favoritas?')

imprimeTresCoresFavoritas('Azul', 'Verde', 'Vermelho')

//Exercício 6

function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
}

//Exercício 7

function calculaIngressosEspetaculo(custo, valorIngresso) {
   // implemente sua lógica aqui
}

// Exercício 8

function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
}

// Exercício 9

function retornaPrimeiroElemento(array) {
   // implemente sua lógica aqui
}

// Exercício 10

function retornaUltimoElemento(array) {
   // implemente sua lógica aqui
}

//Exercício 11

function trocaPrimeiroEUltimo(array) {
   // implemente sua lógica aqui
}

// Exercício 12

function checaIgualdadeDesconsiderandoCase(string1, string2) {
   // implemente sua lógica aqui
}

// Exercício 13

function checaRenovacaoRG() {
   // implemente sua lógica aqui
}

// Exercício 14

function checaAnoBissexto(ano) {
   // implemente sua lógica aqui
}

// Exercício 15

function checaValidadeInscricaoLabenu() {
   // implemente sua lógica aqui
}