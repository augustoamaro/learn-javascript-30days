// Em vez de escrever um loop regular, a última versão do JavaScript introduziu muitos métodos integrados que podem nos ajudar a resolver problemas complicados.
// Todos os métodos embutidos usam a função de retorno de chamada.

// forEach: repete os elementos de um array. Usamos forEach apenas com matrizes. Recebe uma função de retorno de chamada com elementos, parâmetro de índice e o próprio array.
// O índice e o array são opicionais.

arr.forEach(function (element, index, arr) {
    console.log(index, element, arr)
})

// O código acima pode ser escrito usando a arrow function
arr.forEach((element, index, arr) => {
    console.log(index, element, arr)
  })

// O código acima pode ser escrito usando arrow function com um retorno explícito

arr.forEach((element, index, arr) => console.log(element, index, arr))

let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => sum += num) // 15
console.log(sum)

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
countries.forEach((element) => console.log(element.toUpperCase()))




