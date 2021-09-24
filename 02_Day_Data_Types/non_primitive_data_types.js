// Os tipos de dados não primitivos são modificáveis. Podemos modificar o valor após a sua criação.

/*  
    Array é uma lista de valores de dados entre colchetes, 
    o valor do array são referenciados por seu índice que começa em 0, ou seja, 
    o primeiro elemento do array é 0, o segundo 1, etc...
*/

// array contendo números
let nums = [1, 2, 3, 4, 5]
nums[0] = 10

console.log(nums) // [10, 2, 3, 4, 5]

// objeto 1
let personOne = {
    firstName: 'Curtis',
    lastName: 'Jackson',
    country: 'USA',
    age: 42
}

// objeto 2
let personTwo = {
    firstName: 'Lebron',
    lastName: 'James',
    country: 'USA',
    age: 36
}

console.log(personOne === personTwo) // false

