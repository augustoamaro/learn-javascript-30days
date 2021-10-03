// Obter os valores de um objeto como um array

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
console.log(copyPerson);

const values = Object.values(copyPerson);
console.log(values);