/* RESPOSTAS ExERCICIO DE INTERPRETAçÂO DE CODIGO


QUESTÃO 1
>>>> a) Vão ser impressos os valores 10 e 50
>>>> b) Será impresso apenas o valor 50, pois 
dessa forma o programa roda apenas a ultima linha de comando "minhaFuncao(10)".


QUESTÃO 2
>>>> a) a função dela é pedir uma frase ao usuario, deixar todos os caracteres em 
letras minusculas e verificar se na frase tem a palavra "cenoura".
>>>> b) nas tres entradas do usuario o valor retornado é "True".

*/


/*RESPOSTAS DOS EXERCICIOS DE ESCRITA DE CODIGO */

/* QUESTÃO 1*/

/*
>>>> a) */

function informacoesPessoais () {
    
    console.log("Eu sou Larissa, tenho 32 anos, moro em São Paulo e sou Estudante.")
}

informacoesPessoais()

/*
>>>> b) */

function informacoesPessoais (nome, idade, endereco, profissao) {
   
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`)
 }

 informacoesPessoais(('Larissa'), (32), (undefined), ('estudante'))

/* QUESTÃO 2 */
/*
>>>> a) */

function somaLetraA (n1, n2) {
    const somaDoisNumeros = n1 + n2
    return somaDoisNumeros
  }
  
  somaLetraA (1, 3)

  /*
  >>>> d) */

    let imprimirMensagem = prompt("Escreva uma mensagem");

    const letraD = function(tamanhomaiuscula) {
	return tamanhomaiuscula.ToUpperCase().leght()
      
  }

  const resultadoFinal = letraD(imprimirMensagem)
console.log(resultadoFinal)