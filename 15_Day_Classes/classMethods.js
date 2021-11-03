// O construtor dentro de uma classe é uma função embutidade que nos permite criar um blueprint para o objeto. Em uma classe, podemos criar métodos de classe.
// Métodos são função JavaScript dentro da classe. Vamos criar algun métodos de classe.

class Person {
    constructor (firstName, lastName, age, country) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
}

const person1 = new Person('Augusto', 'Amaro', 29, 'Brasil')
const person2 = new Person('Lebron', 'James', 36, 'USA')

console.log(person1.getFullName());
console.log(person2.getFullName());