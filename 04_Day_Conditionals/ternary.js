// Uma alternativa de escrever condicionais é usando operadores ternários.

let isRaining = true;
isRaining
    ? console.log('Você precisa de uma capa de chuva')
    : console.log('Não precisa de uma jaqueta')

    
let firstName = 'Leonidas';

firstName === 'Lucas' 
    ? console.log('Lucas') 
    : firstName === 'Leonidas' 
        ? console.log('Leonidas') 
        : console.log('Nome não escontrado')