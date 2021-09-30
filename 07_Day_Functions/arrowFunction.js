// Arrow function não tem objeto de argumentos com espoco de função. Para implementar uma função que leva um número ilimitado de argumentos em uma função seta,
// usamos o operador de propagação seguido por qualquer nome de parâmetro. Qualquer coisa que passamos como argumento na função pode ser acessada como array na arrow function.


const sumAllNums = ( ... args ) => {
    let sum = 0;
    for (const element of args) {
        sum += element
    }

    return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173


const square = n => {
    return n * n
}

console.log(square(2))


// inline
const square2 = n => n * n
console.log(square(5));