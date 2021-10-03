// Podemos acessar valores de objeto usando dois métodos:

// Usando . seguido pelo nome da chave se o nome da chave for uma palavra
// Usando colchetes e uma citação

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
        return `${this.firstName} ${this.lastName}`
    },
    'phone number' : '4799343483'
}

// acessando valores usando .
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.country);

// valor pode ser acessado usando colchetes e nome da chave
console.log(person['firstName']);
console.log(person['lastName']);
console.log(person['age']);
console.log(person['country']);

// exemplo para acessar o phone number
console.log(person['phone number']);