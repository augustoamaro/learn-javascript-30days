// O objeto pessoa tem propriedades getFullName, que é uma função dentro do objeto pessoa e chamamos de método de objeto.
// Podemos usar a palavra this para acessar valores de diferentes propriedades do objeto.
// Não podemos usar uma função de seta como método de objeto porque a palavra this se refere dentro de uma função de set em vez do próprio objeto.

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
    }
}

console.log(person.getFullName())