// As propriedas da função do construtor podem ter um valor padrão como outras funções regulares.

class Person {
    constructor (
        firstName = 'Augusto',
        lastName = 'Amaro',
        age = 29,
        country = 'Brasil'
    ) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
    }
}

const person1 = new Person()
const person2 = new Person('LeBron', 'James', 36, 'USA')

console.log(person1);
console.log(person2);