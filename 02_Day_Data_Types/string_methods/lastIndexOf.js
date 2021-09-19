// Pega um substring e se a substring existe em uma string retorna a última posição da substring.
// Se não existir retorna -1.

let  string = 'Eu amo JavaScript. Se você não ama JavaScript, o que mais você pode amar.'

console.log(string.lastIndexOf('amo')); // 3
console.log(string.lastIndexOf('JavaScript')); //35
console.log(string.lastIndexOf('.')); // 72