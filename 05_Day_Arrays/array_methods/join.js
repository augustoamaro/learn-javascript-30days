// É usado para unit os elementos do array. O argumento que passamos no método join será unido ao array,
// e retornará como uma string. Por padrão ele se junta com uma virgula.

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.join()); // Tira o espaço depois da vírgula

const webTechs = ['HTML', 'CSS', 'JS'];
console.log(webTechs.join(' # '));