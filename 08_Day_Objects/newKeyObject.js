// Um objeto é uma estrutura de dados mutável e podemos modificar o conteúdo de um objeto após sua criação.

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
}

person.nationality = 'Brasileiro';
person.country = 'USA';
person.title = 'Software Engineer';
person.skills.push('Next');

person.getPersonInfo = function() {
    let skillWithoutLastSkill = this.skills
        .splice(0, this.skills.length -1)
        .join(', ')
    
    let lastSkill = this.skills.splice(this.skills.length -1)[0]
    let skills = `${skillWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} is ${this.title} and he lives in ${this.country} and he know ${skills}`
    return statement
}

console.log(person)
console.log(person.getPersonInfo())