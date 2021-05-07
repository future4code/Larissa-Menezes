// --- EXERCÍCIO 1 ------------------------------------------------------------------


// function imprimeOlaMundo() {
//   console.log('Olá mundo')
// }

// imprimeOlaMundo()





// --- EXERCÍCIO 2 ------------------------------------------------------------------
// function imprimeOlaNome (nome) {
//   console.log(`Olá ${nome}`)
// }

// const nomeInserido = prompt('Insira seu nome')
// imprimeOlaNome(nomeInserido)
// imprimeOlaNome('Vitória')
// imprimeOlaNome('Luis')



// --- EXERCÍCIO 3 ------------------------------------------------------------------

//Exemplo 

// function calculaArea(altura, largura) {
//   const area = altura * largura //number
//   console.log(area)
//   return area
// }

// // const areaCalculada = calculaArea(2, 5)
// // console.log(areaCalculada)

// const areaCalculada1 = calculaArea(5, 5) //valor retornado = 25
// console.log(areaCalculada1)
// const areaCalculada2 = calculaArea(3, 4) //valor retornado = 12
// console.log(areaCalculada2)

// const areaTotal = areaCalculada1 + areaCalculada2
// console.log(areaTotal)

// Exercício

// Crie uma função que receba dois números e retorne a soma entre eles

function somaDoisNumeros (num1, num2) {
  const somaDois = num1 + num2
  return somaDois
}

const soma1 = somaDoisNumeros(10, 20)
const soma2 = somaDoisNumeros(15, 30)

const somaTotal = soma1 + soma2
console.log(somaTotal)

// --- EXERCÍCIO 4 ------------------------------------------------------------------
// Crie uma função que receba um array de números e retorne um novo array com o último e o primeiro número do array recebido divididos por dois.

function divideNumeros(arrayDeNumeros) {
  const novoArray = []
  const tamanho = arrayDeNumeros.length
  const primeiroNumero = arrayDeNumeros[0] / 2
  const ultimoNumero = arrayDeNumeros[tamanho - 1] / 2
  novoArray.push(primeiroNumero, ultimoNumero)
  return novoArray
}

const resultado = divideNumeros([0, 2, 3, 5, 7, 8, 10])
console.log(resultado)

// --- EXERCÍCIO 5 ------------------------------------------------------------------

//expressão de função

const imprimeOlaNome = function(nome) {
  console.log(`Olá ${nome}`)
}

imprimeOlaNome('Tiago')
imprimeOlaNome('Vitória')
imprimeOlaNome('Luis')


//arrow function
const calculaArea = (altura, largura) => {
  const area = altura * largura //number
  return area
}

console.log(calculaArea(5, 6))

