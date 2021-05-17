//Respostas exercicio de interpretação de codigo

//1) a) Vai ser impresso linha por linha. 
// Vai ficar dessa forma:
// Da Primeira linha, item: { nome: "Amanda Rangel", apelido: "Mandi" }, index [0] e por fim vai repetir o array usuarios inteiro: { nome: "Amanda Rangel", apelido: "Mandi" }, { nome: "Laís Petra", apelido: "Laura" }, { nome: "Letícia Chijo", apelido: "Chijo" }
// Da Segunda Linha, Item: { nome: "Laís Petra", apelido: "Laura" }, index: [1], array usuarios inteiro.
// Da Terceira linha, Item: { nome: "Letícia Chijo", apelido: "Chijo" }, index [2], array usuarios inteiro.  

//2) a) Irá retornar apenas os nomes que estão dentro do array: 
// [nome: "Amanda Rangel", nome: "Laís Petra", nome: "Letícia Chijo"]

//3) a) Irá retornar o array usuarios sem a linha que tem o apelido "Chijo", Irá ficar assim:
// [{ nome: "Amanda Rangel", apelido: "Mandi" }, { nome: "Laís Petra", apelido: "Laura" }]

// Respostas exercicio de interpretação de codigo

//1) a)

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 const apenasNomeDogs = pets.map((item) => {
    return item.nome
 })
 
 console.log(apenasNomeDogs)

//1) b)

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 const apenasSalsicha = pets.filter((item) => {
    return item.raca === salsicha
 })

 console.log(apenasSalsicha)

 //2)a)

 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }

 ]

 const apenasNomeProdutos = produtos.map((item) => {
    return item.nome
 })
 
 console.log(apenasNomeProdutos)

 //2)c)

 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 const apenasBebidas = produtos.filter((item) => {
    return item.categoria === "Bebidas"
 })

 console.log(apenasBebidas)