//a)
//const minhaString: string = 1
//A variavel não aceita um valor tipo number porque esta como tipo string.

//b)
const meuNumero: Number = 1
//para esta variavel aceitar uma string, podemos atribuir "any" para o tipo que ela precisa aceitar.

//c)
type pessoa = {nome: string, idade: Number, corFavorita: string}

const pessoa1: pessoa = {
    nome: "Tupã",
    idade: 15,
    corFavorita: "Verde"
}

const pessoa2: pessoa = {
    nome: "Justus",
    idade: 29,
    corFavorita: "Lilás"
}

const pessoa3: pessoa = {
    nome: "Morgana",
    idade: 35,
    corFavorita: "Marrom"
}

