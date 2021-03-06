// Quando criamos uma classe para algunms propriedades, podemos ter um valor inicial. Por exemplo, se você estiver jogando um jogo, sua pontuação inicial será zero.
// Portanto, podemos ter uma pontuação inicial ou pontuação zero. Podemos ter uma habilidade inicial e iremos adquirir alguma habilidade depois de algum tempo

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
}

const person1 = new Person('Augusto', 'Amaro', 29, 'Brasil', 'Penha')
const person2 = new Person('LeBron', 'James', 36, 'USA', 'Akron')

console.log(person1.score);
console.log(person2.score)

console.log(person1.skills);
console.log(person2.skills)

// Um método pode ser um método regular, um getter ou um seller. 