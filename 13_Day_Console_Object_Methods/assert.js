// Grava uma mensagem de erro no console se a asserção for falsa. Se a afirmação for verdadeira, nada acontece.
// O primeiro parâmetro é uma expressão de asserção. Se esta expressão for falsa, uma mensagem de erro de falha de declaração será exibida.

console.assert(4 > 3, '4 is greater than 3') // Sem resultado
console.assert(3 > 4, '3 is not greater than 4') // Asseção falhou: 3 não é maior que 4

for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`
  console.log('the # is ' + i)
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
}