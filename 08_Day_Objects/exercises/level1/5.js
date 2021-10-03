// Defina novas propriedades do objeto cão: raça, getDogInfo

const dog = {};

dog.name = 'Thor';
dog.color = 'Branco';
dog.age = '4';
dog.bark = 'woof woof'

dog.breed = 'Boxer';
dog.getDogInfo = function() {
    return `Nome: ${this.name}\nRaça: ${this.breed}\nCor: ${this.color} `
}

console.log(dog.getDogInfo());