// Testa uma correspondência em uma string. Ele retorna o índice da correspondência ou -1 se a pesquisa falhar

const str = 'I love JavaScript'
const pattern = /love/g
const result = str.search(pattern)
console.log(result)