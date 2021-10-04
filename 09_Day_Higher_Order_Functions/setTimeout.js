// Usamos High Ordem Functions setTimou para executar alguma ação em algum momento no futuro. O método global setTimeout usa uma função de retorno de chamada
// e uma duração como parâmetro. A duração é em millisegundos e o retorno de chamada espera por esse perĩodo de tempo.

function sayHello() {
    console.log('Hello')
}
setTimeout(sayHello, 2000) // imprime hello depois de esperar 2 segundos