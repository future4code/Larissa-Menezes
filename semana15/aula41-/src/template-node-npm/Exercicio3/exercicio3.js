const tarefa = process.argv[2]

const listaTarefas = [
	"Lavar a louça",
	"Comprar Leite"
]

const novaListaTarefas = [...listaTarefas, tarefa] 

console.log("Sua tarefa foi adicionada com sucesso!")
console.log(`tarefas do dia: [${novaListaTarefas.toString()}]`)