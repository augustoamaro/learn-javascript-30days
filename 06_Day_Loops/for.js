// sintaxe
// for (initialization, condition, imcrement/decrement) {
    // código vai aqui
// }

// Exemplos
for (let i = 0; i <= 5; i++) {
    console.log(i) // 0 1 2 3 4 5
}

for (let i = 5; i >= 0; i--) {
    console.log(i) // 5 4 3 2 1 0 
}

for (let i = 0; i < 5; i++) {
    console.log(`${i} * ${i} = ${i * i}`)
}


const  countries  =  ['Finlândia', 'Suécia', 'Dinamarca', 'Noruega', 'Islândia'];
const newarr = [];

for (let i = 0; i < countries.length; i++) {
    newarr.push(countries[i].toUpperCase());
}

// Adicionar todos os elementos no array
const numbers = [1, 2, 3, 4, 5];
let soma = 0;

for (let i = 0; i < numbers.length; i++) {
    soma += numbers[i];
}

console.log(soma)

