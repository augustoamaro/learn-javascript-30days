// Checa se todos os elementos são similares em um aspecto, e retorna um booleano

const names = ['Augusto', 'Amaro', 'JS', 'React']
const areAllStr = names.every((name) => typeof name === 'string')
console.log(areAllStr)


const bools = [true, true, true, true]
const areAllTrue = bools.every((b) => {
    return b === true
})

console.log(areAllTrue)