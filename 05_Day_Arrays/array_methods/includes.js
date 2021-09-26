// Para verificar se um item existe em um array. Se existir, ele retorna o verdadeiro, caso contrário, ele retorna o falso

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.includes(5)); // true
console.log(numbers.includes(0)); // false
console.log(numbers.includes(1)); // true
console.log(numbers.includes(6)); // false

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
];

console.log(webTechs.includes('Node'));  // true
console.log(webTechs.includes('C'));     // false