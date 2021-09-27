// Usamos for loop para Array. É uma maneira prática de iterar por meio de um array se não interessados no índice de cada elemento do array.

const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
    console.log(num)
}


const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  for (const tech of webTechs) {
    console.log(tech.toUpperCase())
  }

  for (const tech of webTechs) {
    console.log(tech[0]) // pega a primeira letra de cada elemento,  H C J R N M
  }