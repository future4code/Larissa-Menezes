type pokemon = {
	name: string,
        types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//a) Após instalar o npm i -g typeScript, escreveria o comando "tsc exercicio4.ts no terminal, assim um arquivo JS é criado automaticamente"

//b) "Se o arquivo estiver dentro de uma pasta SRC, basta entrar dentro da pasta e dar o comando: 
//    "tsc exercicio4.ts" que será criado o arquivo JS"

//c) Sim, tem como fazer este comando. Basta escrever tsc na paste em que deseja transpilar 
//   os arquivos ts.

//d) Neste novo arquivo criado, há varias linhas a mais comentadas, como a outdir, rootdir e a 
//   removeComents. Comentamos ou descomentamos linhas de acordo com as configurações que desejamos
//   para o projeto que estamos desenvolvendo no momento.
