let space = ' '; // string com um space vazio
let firstName = 'Augusto';
let lastName = 'Amaro';
let country = 'Brasil';
let city = 'Penha';

//Concatenação usando o sinal de +
let fullName = firstName + space +  lastName;
console.log(fullName);

//Concatenação usando Template String 
let personInfoTwo = `Meu nome é ${firstName} ${lastName}` // ES6 - Interpolação
console.log(personInfoTwo)