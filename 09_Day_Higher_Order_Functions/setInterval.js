// Em JavaScript podemos executar alguma atividade em determinado intervalo de tempo ou podemos agendar (esperar) algum tempo para executar algumas atividades

// Usamos a High Order Function setInterval para fazer alguma atividade continuamente de algum intervalo de tempo. O método global setInterval usa uma função de retorno 
// de chamada e uma duração como parâmetro. A duração é em milissegundos e o retorno de chamada será sempre chamado nese intervalo de tempo

function sayHello() {
    console.log('Hello')
        
}
setInterval(sayHello, 2000) // printa hello a cada 2 segundos


