/* RESPOSTAS EXERCICIOS DE INTERPRETAÇÃO DE CODIGO:

QUESTÃO 1

let array
console.log('a. ', array)

>>>> a. undefined

array = null
console.log('b. ', array)

>>>> b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

>>>> c. 11

let i = 0
console.log('d. ', array[i])

>>>> d. 3

array[i+1] = 19
console.log('e. ', array)

>>>> e. array = [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor)

>>>> f. 9

QUESTÃO 2

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
Qual será o valor impresso no console se a entrada do usuário 
for: "Subi num ônibus em Marrocos"?

>>>> Irão aparecer tres respostas. O comando "toUpperCase" deixará a frase toda em 
letras maiusculas, e junto com replaceAll("A", I"") Irá trocar a vogal "A" por "i"
ficando assim: SUBI NUM ONIBUS EM MIRROCOS. O comando lenght contará quantos elementos (letras)
tem na frase, retonando o numero 27.

*/

/* CODIGO QUESTÃO 1: */

const pergunta = prompt("Digite seu nome")
const email = prompt("Digite seu email")

console.log(alert(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vindo ${pergunta} !`)) 



/* CODIGO QUESTÃO 2 */
let comidasFavoritas = ['Arroz com feijão', 'Peixe Frito', 'Macaxeira', 'Empada', 'Coxinha']
console.log(alert(`Essas são minhas comidas favoritas: ${comidasFavoritas}`))

let usuario = prompt('E qual a sua comida favorita?')

console.log(alert('Que legal! Inseri sua comida favorita na minha lista, veja como ficou:'`comidasFavoritas.replaceAll('Peixe Frito', ${usuario}`))



/* CODIGO QUESTÃO 3 */

let arrayVazio = []
let usuarioTarefas = prompt("Cite três atividades que você faz durante o dia")

console.log(alert(arrayVazio = usuarioTarefas))

let usuarioTarefasNovas = prompt("E qual dessas atividades você ja fez hoje? Escreva apenas a posição dela" `${usuarioTarefas.splice()}`)

console.log(alert(usuarioTarefasNovas))








