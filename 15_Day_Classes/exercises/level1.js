// 1. Crie uma classe Animal. A classe terá propriedades de nome, idade, cor.

class Animal {
    constructor(name, age, color) {
        this.name = name
        this.age = age
        this.color = color
    } 
}

// 2. Crie uma classe filho cão e gato da Classe Animal.

const dog = new Animal('Thor', 4, 'White')
const cat = new Animal('Lilica', 5, 'Black/White')

console.log(dog);
console.log(cat);