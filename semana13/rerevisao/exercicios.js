// EXERCÍCIO 01
function inverteArray(array) {

}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let novoArray = [];
  for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0) {
      novoArray.push(array[i] * array[i])
    }
  }
  return novoArray
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let novoArray = [];
  for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0) {
      novoArray.push(array[i])
    }
  }
  return novoArray
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const resultadosExpressoes = [false, false, true, true, true]
  return resultadosExpressoes
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  const arrayPar = [];
  for(let numero = 0; arrayPar.length < n; numero++) {
    if(numero % 2 === 0){
      arrayPar.push(numero)
    }
  }
  return arrayPar
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if(a===b && b===c) {
    console.log("equilátero")
  } else if (a!==b && b!==c) {
    console.log("escaleno")
  } else {
    console.log("isósceles")
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  let maiorNumero
  let menorNumero
  let maiorDivisivelPorMenor

  if(num1 > num2) {
    maiorNumero = num1
    menorNumero = num2
  } else {
    maiorNumero = num2
    menorNumero = num1
  }

  maiorDivisivelPorMenor = maiorNumero % menorNumero === 0

  const diferenca = maiorNumero - menorNumero

  return {
    maiorNumero: maiorNumero,
    menorNumero: menorNumero,
    diferenca: diferenca
  }
} 

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {
  const filme = {
  nome: "O Diabo Veste Prada",
  ano: 2006,
  diretor: "David Frankel",
  atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
  return filme
}


// EXERCÍCIO 13
function imprimeChamada() {
  const filme = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
  }

  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.elenco}."`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const retangulo = {
  largura: lado1,
  altura: lado2,
  perimetro: 2 * (lado1 + lado2),
  area: lado1 * lado2
  }
  return retangulo
} 

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  const pessoa = {
    nome: "Júpiter",
    idade: 4600000000,
    email: "planetagasoso@labenu.com.br",
    endereco: "Rua quinta orbita, 30. Após cinturão de asteroides"
  } 
  return {
    ...pessoa,
    nome: "ANÔNIMO"
    }
  
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
 const pessoa = [
    { nome: "Pedro", idade: 20 },
    { nome: "João", idade: 10 },
    { nome: "Paula", idade: 12 },
    { nome: "Artur", idade: 89 } 
  ]

const novoArray = arrayDePessoas.filter((pessoa) => {
  return pessoa.idade >= 18
})
return novoArray
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const pessoa = [
    { nome: "Pedro", idade: 20 },
    { nome: "João", idade: 10 },
    { nome: "Paula", idade: 12 },
    { nome: "Artur", idade: 89 } 
  ]

  const novoArray = arrayDePessoas.filter((pessoa) => {
    return pessoa.idade <= 18
  })
return novoArray
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  const array = [1, 2, 3, 4, 5, 6]
  const novoArray = array.map((num) =>{
    return num * 2
  })
  return novoArray
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  const array = [1, 2, 3, 4, 5, 6]
  const novoArray = array.map((num) =>{
    return (num * 2).toString() 
  })
  return novoArray
}

// EXERCÍCIO 17C
function verificaParidade(array) {
  const array = [1, 2, 3, 4, 5, 6]
  const novoArray = array.map((num) => {
    if(num % 2 === 0) {
      return (`${num} é par`)
    }
    else {
      return (`${num} é impar`)
    }   
  })
  return novoArray
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  const pessoas = [
    { nome: "Paula", idade: 12, altura: 1.8},
    { nome: "João", idade: 20, altura: 1.3},
    { nome: "Pedro", idade: 15, altura: 1.9},
    { nome: "Luciano", idade: 22, altura: 1.8},
    { nome: "Artur", idade: 10, altura: 1.2},
    { nome: "Soter", idade: 70, altura: 1.9}
  ]
  let pessoasAutorizadas = []
  for(const pessoa of pessoas) {
    if(pessoa.idade >= 14 && pessoa.idade <= 60 && pessoa.altura >= 1.5) {
      pessoasAutorizadas.push(pessoa)
    }
  }
  return pessoasAutorizadas;
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  const pessoas = [
    { nome: "Paula", idade: 12, altura: 1.8},
    { nome: "João", idade: 20, altura: 1.3},
    { nome: "Pedro", idade: 15, altura: 1.9},
    { nome: "Luciano", idade: 22, altura: 1.8},
    { nome: "Artur", idade: 10, altura: 1.2},
    { nome: "Soter", idade: 70, altura: 1.9}
  ]
  let pessoasNaoAutorizadas = []
  for(const pessoa of pessoas) {
    if(pessoa.idade < 14 && pessoa.idade > 60 && pessoa.altura < 1.5) {
      pessoasNaoAutorizadas.push(pessoa)
    }
  }
  return pessoasNaoAutorizadas
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
