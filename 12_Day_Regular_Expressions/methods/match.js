// Retorna uma matriz contendo todas as correpondências, incluindo grupos de captura, ou null se nenhuma correspondência for encontrada.
// Se não usarmos um sinalizador global, match() retorna um array contendo o padrão, índice, entrada e grupo.

const str = 'I love JavaScript'
const pattern = /love/
const result = str.match(pattern)
console.log(result)

const str2 = 'I love JavaScript'
const pattern2 = /love/g
const result2 = str.match(pattern2)
console.log(result2)