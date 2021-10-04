// Checa se algum dos elementos são similiares em um aspecto. E retorna booleano

const names = ['Leonidas', 'Amaro', 'JS', 'React']
const bools = [true, true, true, true]

const areSomeTrue = bools.some((b) => {
    return b === true
})

console.log(areSomeTrue)