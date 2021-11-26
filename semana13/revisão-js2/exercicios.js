/* // EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
} */

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const base = 4
  const altura = 2 
  console.log(base*altura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  const idade = Number(prompt('Qual a sua Idade?'))
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  IMC = (altura*altura) /peso
  return IMC
}
calculaIMC()

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nomeUsuario = prompt('Qual seu nome?')
  const IdadeUsuario = prompt('Qual sua idade?')
  const emailUsuario = prompt('Qual seu email?')
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  console.log(`Meu nome é ${nomeUsuario}, tenho ${IdadeUsuario} anos, e o meu email é ${emailUsuario}.`)
}

// EXERCÍCIO 05()
function imprimeTresCoresFavoritas() {
  const primeiraCor = prompt("Olá! Quais são suas tres cores favoritas? Digite a primeira aqui!")
  const segundaCor = prompt('Qual a segunda cor?')
  const terceiraCor = prompt('Qual a terceira cor?')
  console.log(alert(`Minhas tres cores favoritas são ${primeiraCor}, ${segundaCor}, e ${terceiraCor}`))
}


// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  
  return ${string.toUpperCase()}
}
console.log((retornaStringEmMaiuscula('oi'))

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo % valorIngresso === 0
}
calculaIngressosEspetaculo(3000, 100)

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
}
retornaPrimeiroElemento(["Laranja", "Banana", "Maçã"])

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length-1]
}
retornaUltimoElemento([1, 2, 3, 4, 5])

// EXERCÍCIO 1
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  if(string1 = string2) {
    console.log(true)
  } else {
    console.log(false)
  }

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  let dataVencimento
  let dataAtual
  if(dataVencimento === dataAtual) {
    console.log('Sua habilitação venceu! Procure o DETRAN para regularizar sua situação.') 
  } else {
    console.log('Sua habilitação esta regularizada!')
  }

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {

  let ano = 2021;

  if ( ( ano % 4 == 0 && ano % 100 != 0 ) || (ano % 400 == 0) ) { 
    console.log(ano + ' estamos em um ano bissexto'); 
  } else {
    console.log(ano + ' não estamos em um ano bissexto');
  }
  }

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}