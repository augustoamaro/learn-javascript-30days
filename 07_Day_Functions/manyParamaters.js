//As vezes não sabemos quantos argumentos o usuário vai passar. Portanto, devemos saber como escrever uma função que pode receber um número ilimitado de argumentos.
//A maneira como fazemos isso em uma diferença significativa entre a declaração de uma função (função regular) e uma arrow function.


// Número ilimitado de parâmetros em função regular:
// Uma declaração de função fornece um array de argumentos com escopo de função como objeto. 
// Qualquer coisa quepassamos como argumento na função pode ser acessada a partir do objeto de argumento dentro das funções.
function sumAllNums() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173
