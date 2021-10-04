// Retorna o primeiro elemento que satifaça a condição

const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age)

const names = ['Leonidas', 'Amaro', 'JS', 'React']
const result = names.find((name) => name.length > 7)
console.log(result)