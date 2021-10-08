// Sempre que gostamos de escrever uma função de seta que receba m número ilimitado de argumentos, usamos um operador de propagação.
// Se usamos um operador de propagação como parâmetro, o argumento passado quando invocamos uma função mudará para um array.

const sumAllNums = (...args) => {
    console.log(args)
}

sumAllNums(1, 2, 3, 4, 5)


const sumNums = (...args) => {
    let sum = 0
    for (const num of args) {
        sum += num
    }
    return sum
}

console.log(sumNums(1, 2, 3, 4, 5))