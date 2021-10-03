// Copiar um objeto sem modificar o objeto original

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