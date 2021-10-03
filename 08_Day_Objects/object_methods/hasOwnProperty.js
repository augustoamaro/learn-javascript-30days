// Checar se uma chave específica ou propriedade existe no objeto

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
console.log(copyPerson.hasOwnProperty('firstName'));
console.log(copyPerson.hasOwnProperty('adress'));