// Parâmetro do objeto sem destructuring

// Sem destructuring 
const rect = {
    l: 20,
    a: 10
}

const calcularPerimetro = retangulo => {
    return 2 * (retangulo.l + retangulo.a)
}

console.largura(calcularPerimetro(rect))


const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)']
  }