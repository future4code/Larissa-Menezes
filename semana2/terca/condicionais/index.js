// Resposta Exercícios de interpretação de código:

// 1) a) Esse codigo faz o modulo do numero que o usuario escolhe
//       e confere se ele é par e o resto é zero, se não for, ele emite uma mensagem 
//       informando que o usuario não passou no teste.
//    b) Para numeros que o resto do modulo é zero.
//    c) Para numeros que o resto do modulo é diferente de zero.

// 2) a) O Código serve para mostrar o preço das frutas que o usuario 
//       escolhe.
//    b) Se o usuario escolher maçã, será impresso 2.25.
//    c) A mensagem impressa será 5.

// 3) a) A primeira linda esta exbindo uma caixa de texto com uma mensagem "digita um numero".
//    b) Se o usuario digitar o numero 10, sera impresso "esse numero passou no teste".
//       Se o usuario digitar -10, não aparece nada porque o comando não esta definido.
//    c) Tem um erro no console, a variavel esta declarada dentro do "if" e por isso não pode ser acessada. 

// Respostas Exercícios de escrita de código:

// 1)

const nomeUsuario = prompt('Digite sua idade')
const idade = Number(nomeUsuario)

if (idade > 18) {
    console.log('Você pode dirigir!')
} else {
    console.log('Você não pode dirigir!')
}

// 2)
const turnoUsuario = prompt('Que turno do dia você estuda? Digite "M" para (matutino), "V" para (Vespertino) ou "N" para  (Noturno)')     
    if (turnoUsuario === "M") {
        console.log("Bom Dia!") 
    } else (turnoUsuario === "V") {
        console.log("Boa Tarde!")
    } else (turnoUsuario === "N") {
            console.log("Boa Noite!")
    }


// 3) 

const turnoUsuario = () => {
    const turno = prompt('Que turno do dia você estuda? Digite "M" para (matutino), "V" para (Vespertino) ou "N" para  (Noturno)')     
    switch (turno) {
        case "M":
            console.log("Bom Dia!")
            break
        case "V":
            console.log("Boa Tarde!")
            break
        case "N":
            console.log("Boa Noite!")
            break
        default:
            console.log('você digitou errado o seu turno. Coloque apenas as letras "M" para Matutino, "V" para vespertino e "N" para noturno'
            } 
            }
    
// 4) ??

