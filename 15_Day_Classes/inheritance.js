// Usando herança, podemos acessar todas as propriedades e métodos de classe pai. Isso reduz a repetição de código.
// Se você lembra, temos uma classe pai Person e criaremos filhos a partir dela.

// Criando uma classe filha Aluno a partir da classe pai Person

class Student extends Person {
    saySomething() {
      console.log('I am a child of the person class')
    }
  }
  
  const s1 = new Student('Asabeneh', 'Yetayeh', 'Finland', 250, 'Helsinki')
  console.log(s1)
  console.log(s1.saySomething())
  console.log(s1.getFullName())
  console.log(s1.getPersonInfo())