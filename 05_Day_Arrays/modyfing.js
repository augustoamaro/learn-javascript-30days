// Um array é mútavel (modificável). Depois que um arrau é criado, podemos modificar o conteúdo dos elementos do array

const numbers = [1, 2, 3, 4, 5];
numbers[0] = 10; // Recebe o novo valor
numbers [1] = 20; // Recebe o novo valor

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
    'Kenya'
  ];

countries[0] = 'Brasil'; // Primeiro elemento do array deixa de ser Albania e recebe Brasil

let lastIndex = countries.length -1;
countries[lastIndex] = 'USA'; // Último elemento do array deixa de ser Kenya, e recebe USA

console.log(countries);