// O método get nos permite acessar o valor do objeto. Escrevemos um método get usando a palavra-chave get seguida por uma função.
// Em vez de acessar propriedades diretamente do objeto, usamos getter para obter o valor

class Person {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    get getScore() {
        return this.score
    }
    get getSkills() {
        return this.skills
    }
}

const person1 = new Person('Augusto', 'Amaro', 29, 'Brasil', 'Penha')
const person2 = new Person('LeBron', 'James', 36, 'USA', 'Akron')

console.log(person1.getScore);
console.log(person2.getScore)

console.log(person1.getSkills);
console.log(person2.getSkills)
