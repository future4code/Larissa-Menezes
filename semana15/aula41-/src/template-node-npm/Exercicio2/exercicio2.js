const operacaoMatematica = process.arg[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

switch(operacaoMatematica){
    case "adicao":
        console.log(`A soma dos numeros é: ${num1+num2}`)
        break;
    case "subtracao":
        console.log(`A subtração dos numeros é: ${num1-num2}`)
        break;
    case "divisao":
        console.log(`A divisão dos numeros é: ${num1/num2}`)
        break;
    case "multiplicacao":
        console.log(`A multiplicação dos numeros é: ${num1 *num2}`)
        break;
    default:
        console.log('Escolha a operação matematica que deseja fazer e digite dois numeros')
}