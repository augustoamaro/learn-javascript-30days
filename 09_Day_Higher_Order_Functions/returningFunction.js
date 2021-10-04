// High order function retornando como valor

// Highr Order function retornando uma outra função
const higherOrder = n => {
    const doSomething = m => {
        const doWhatEver = t => {
            return 2 * n + 3 * m + t
        }
        return doWhatEver
    }

    return doSomething
}
console.log(higherOrder(2)(3)(10));

// Exemplo onde usamos funções de retorno de chamada. Por exemplo, o método forEach usa retorno de chamada
const numbers = [1, 2, 3, 4];

const sumArray = arr => {
    let sum = 0;
    const callback = function(element) {
        sum += element
    }
    numbers.forEach(callback)
    return sum
}
console.log(sumArray(numbers)) // 15

// O examplo acima pode ser simplificado da seguinte forma
const numbers2 = [1, 2, 3, 4]

const sumArray2 = arr => {
    let sum = 0
    numbers2.forEach(function(element) {
        sum += element
    })
    return sum
}
console.log(sumArray2(numbers2))