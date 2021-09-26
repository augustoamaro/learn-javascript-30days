// Para verificar se um item existe em um array. Se existir, retorna o índice, se não, retorna -1

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.indexOf(5)); //  4
console.log(numbers.indexOf(0)); // -1 não existe
console.log(numbers.indexOf(1)); //  0
console.log(numbers.indexOf(6)); // -1 não existe


// Verificando se um elemento existe no array

const fruits = ['banana', 'orange', 'mango', 'lemon'];
let index = fruits.indexOf('banana'); // Primeiro índice

if (index !== -1) {
    console.log('A fruta existe no array');
} else {
    console.log('A fruta não existe no array');
}

// Usando operador ternário

index !== -1 
    ? console.log('A fruta existe no array')
    : console.log('A fruta não existe no array')