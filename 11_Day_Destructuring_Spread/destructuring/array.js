// Destructuring é uma maneira de desempacotar arrays e objetos e atribuí-los a uma variável distinta

const numbers = [1, 2, 3];
let  [numOne, numTwo, numThree] = numbers;

console.log(numOne, numTwo, numThree); // 1 2 3


const names = ['Augusto', 'Amaro', 'Thor', 'Tobi'];
let [firstName, lastName, firstDog, secondDog] = names

console.log(firstName, lastName, firstDog, secondDog); // Augusto Amaro Thor Tobi


const scientificConstants = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants;

console.log(e, pi, gravity, bodyTemp, boilingTemp); // 2.72 3.14 9.81 37 100


const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB', 'GraphQL']
]
const [frontEnd, backEnd] = fullStack;

console.log(frontEnd);
console.log(backEnd);

// Se quisermos pular os valores no array, usando vírgulas adicionais. A vírgula ajuda a omitir o valor anquele índice específico

const ommitNumber = [1, 2, 3];
let [numberOne, , numberThree] = ommitNumber;

console.log(numberOne, numberThree); // 1, 3


const fruits = ['banana', 'apple', 'grape'];
let [fruitOne, , fruitThree] = fruits;

console.log(fruitOne, fruitThree); // banana grape


// Podemos usar o valor padrão caso o valor do array para esse índice seja indefinido

const newNames = [undefined, 'Fletcher', 'Neiman'];
let [
    firstPerson = 'Augusto',
    secondPerson,
    thirdPerson,
    fourthPerson = 'Amaro'
] = newNames

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson) // Augusto Fletcher Neiman Amaro

// Não podemos atribuir variáveis a todos os elementos do array. Podemos desestruturar alguns do primeiros e podemos obter o restante como array
// usando o operador spread (...)

const nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ;
let [num1, num2, num3, ... rest] = nums

console.log(num1, num2, num3); // 1 2 3
console.log(rest); // [ 4, 5, 6, 7, 8, 9, 10 ]

