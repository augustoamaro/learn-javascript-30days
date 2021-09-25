// Para criar um array, é comum usar const em vez de let para declarar uma variávels de array.

const arr = Array()
console.log(arr);

// Usando colchetes []

const array = [];
console.log(array);

// Arrays com valores iniciais, usamos a propriedade length para encontrar o comprimento de um array.

const numbers = [0, 3, 14, 9, 81, 37, 98, 6, 100];                               // array de números 
const fruits = ['banana',  'laranja',  'manga',  'limão'];                   // array de strings (frutas) 

console.log('Numbers:', numbers);
console.log('Numbers of numbers:', numbers.length);

console.log('Fruits:', fruits);
console.log('Number of fruits:', fruits.length);

// Acessando o primeiro item usando o seu índice.
let firstFruit = fruits[0]
console.log(firstFruit);

// O último índice pode ser acessado da seguinte maneira.
let lastIndex = fruits.length -1
console.log(lastIndex);

// Um array pode conter diversos tipos de dados.

const arrayDataTipes = [
    'Augusto', // string
    29, // number
    true, // boolean
    { // object
        country: 'Brasil', 
        city: 'Penha' 
    },
    { // array of object
        skills : ['HTML', 'CSS', 'JS']
    }
]

console.log(arrayDataTipes);