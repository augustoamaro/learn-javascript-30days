// Retorna a posição do primeiro elemento que satifaça a condição

const names = ['Leonidas', 'Amaro', 'JS', 'React']
const ages = [12, 43, 8, 64, 34]

const result = names.findIndex((name) => name.length > 7)
console.log(result) // 0

const age = ages.findIndex((age) => age < 20)
console.log(age)