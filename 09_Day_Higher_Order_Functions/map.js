// Itera os elementos do array e modifica os elementos do array. 
// Recebe uma função de retorno de chamada com elementos, índice, parâmetro da matriz e retorna uma nova matriz

const numbers = [1, 2, 3, 4, 5]
const numbersSquare = numbers.map((num) => num * num) // 1, 4, 9, 16, 25

console.log(numbersSquare)


const names = ['Augusto', 'Amaro', 'JS', 'React']
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase)

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]

  const countriesToUpperCase = countries.map((country) => country.toUpperCase())
  console.log(countriesToUpperCase)