// Contrutor de classe 
//É uma função embutida que permite criar um blueprint para nosso objeto.
// A função construtora começa com um construtor de palavra-chave seguido por um parêntese.
// Dentro dos parênteses passamos propriedades do objeto como parâmetro. Usamos a palavra-chave this para anexar os parâmetros do construtor a classe.

// O seguinte construtor da classe Person possui as propriedades firstName e lastName. Essas propriedades são anexadas à classe Person usando esta palavra-chave. Isso se refere a propria classe.

class Person {
    constructor (firstName, lastName) {
        console.log(this)
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person = new Person()
console.log(person);

// Todas as chaves do objeto são indefinias. Sempre que instanciamos, devemos passar o valor das propriedades. Vamos passar o valor neste momento em que instanciamos a classe.


class Pessoa {
    constructor (nome, sobreNome) {
        this.nome = nome
        this.sobreNome = sobreNome
    }
}

const pessoa = new Pessoa('Augusto', 'Amaro');
console.log(pessoa);

// Uma vez que criamos uma classe, podemos criar muito objetos usando a classe.

class Cachorro {
    constructor (raca, cor) {
        console.log(this);
        this.raca = raca
        this.cor = cor
    }
}

const cachorro1 = new Cachorro('Boxer', 'Branco')
const cachorro2 = new Cachorro('Shitzu', 'Marrom')
console.log(cachorro1, cachorro2);