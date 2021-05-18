// Respostas exercicios de interpretação de codigo

// 1) O codigo esta gerando um loop com "for" para imprimir numeros (i) menores que 5.

// 2) a) serão impressos os numeros do array que são maiores que 18.
// 2) b) Sim, é o suficiente. Poderia ser acrescentado ".lenght"

// 3) Serão adicionadas 4 linhas, cada uma com a quantidade correspondente de asterisco. Na primeira terá um, na segunda dois, na terceira três, e na quarta quatro.

// Respostas exercicios de escrita de codigo

// 1)

let bichosUsuario = () => {
    let bichos = Number(prompt('Quantos bichinhos de estimação você tem?'))
    let bichosNumero = []
    if (bichos === 0) {
        console.log('Que pena! Mas você pode adotar um pet =)')
    } else { for (let i=0; i < bichos; i++)
    { let bichosNome = prompt('Diga o nome dos seus bichinhos!')
    
    bichosNumero = bichosNumero + ' ' + bichosNome
    console.log(bichosNumero)
    }
    }
    return
    }
    
    bichosUsuario()

// 2)

let arrayOriginal = [1, 10, 20, 30, 40, 90]
function imprimeArray (){
    arrayOriginal = imprimeArray
    for (let i=0; i<arrayOriginal.length; i++)
}

imprimeArray()