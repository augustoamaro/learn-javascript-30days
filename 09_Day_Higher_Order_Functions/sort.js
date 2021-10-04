// Os métodos de classificação organizam os elementos do array em ordem crescente ou descrente. Por padrão, o método sort() classifica os valores como string. 
// Isso funciona bem para itens de array de string, mas não para números. Se os valores são classificados como string, isso nos dá um resultado errado.
// O método sort() modifica o array original. Recomenda-se copiar os dados originais antes de começar a usar o método sort()

const products = ['Leite', 'Café', 'Açucar', 'Mel', 'Cenoura']
console.log(products.sort());

// Classificando valores numéricos

// No exemplo abaixo, 100 veio primeiro depois de classificado em ordem crescente. Sort converte itens em string, uma vez que '100' e outros números comparados,
// 1 o qual o inicio da string '100' se tornou o menor. Para evitar isso, usamos uma função de retorno de chamada de comparação dentro do método de classificação, 
// que retorna um negativo, zero ou positivo

const numbers = [9.81, 3.14, 100, 37]
// O uso do método sort para classificar os itens numéricos fornece um resltado incorreto.

console.log(numbers.sort()) // [100, 3.14, 37, 9.81]
numbers.sort(function(a, b) {
    return a - b
})

console.log(numbers) // [ 3.14, 9.81, 37, 100 ]

numbers.sort(function(a, b) {
    return b - a
})

console.log(numbers) // [ 100, 37, 9.81, 3.14 ]

// Classificando Arrays de Objetos

// Sempre que classificamos objetos em um array. Usamos a chave do objeto para comparar.

objArr.sort(function (a, b) {
    if (a.key < b.key) return -1
    if (a.key > b.key) return 1
    return 0
  })
  
  // or
  
  objArr.sort(function (a, b) {
    if (a['key'] < b['key']) return -1
    if (a['key'] > b['key']) return 1
    return 0
  })
  
  const users = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyo', age: 100 },
    { name: 'Elias', age: 22 },
  ]
  users.sort((a, b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
  })
  console.log(users) // sorted ascending
  //[{…}, {…}, {…}, {…}]