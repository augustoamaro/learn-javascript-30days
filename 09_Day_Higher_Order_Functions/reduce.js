// Reduce recebe uma função de retorno de chamada. 
// A função de retorno de chamada usa o acumulador, o valor atual e o valor inicial opcional como um parâmetro e retorna um único valor. 
// É uma boa prática definir um valor inicial para o valor do acumulador. 
// Se não especificamos este parâmetro, por padrão, o acumulador obterá o array first value. 
// Se nosso array for um array vazio, o o JavaScript iá gerar um erro.

const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((acc, cur) => acc + cur, 0) // 15
console.log(sum)