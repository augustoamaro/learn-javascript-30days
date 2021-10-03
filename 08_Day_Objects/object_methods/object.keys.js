// Para obter as chaves ou propriedades de um objeto como uma matriz

const person = {
    firstName: 'Augusto',
    lastName: 'Amaro',
    age: 29,
    country: 'Brasil',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React'    
    ],
    getFullName: function() {
        return `$Meu nome é ${this.firstName} ${this.lastName}`
    },
}

const copyPerson = Object.assign({}, person)
const keys = Object.keys(copyPerson);
console.log(keys);
const country = Object.keys(copyPerson.country);
console.log(country);