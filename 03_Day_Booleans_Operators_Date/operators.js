// Um sinal de igual em JavaScript é um operador de atribuição. Ele usa para atribuir uma variável.
let firstName = 'Augusto';
let lastName = 'Amaro';

let numOne = 4;
let numTwo = 3;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;
let powerOf = numOne ** numTwo
console.log(sum, diff, mult, div, remainder, powerOf);


const PI = 3.14;
let radius = 100 // comprimento em metros;

//Calcular a área de um círculo
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle); // 314m

const gravidade = 9.81; // em m/s2
let massa = 72; // quilograma

//Calcular o peso de um objeto
const peso = massa * gravidade
console.log(peso) // 706.32 Newton

const boilingPoint = 100 // Temperatura em oC, ponto de ebuilição da água
const bodyTemp = 37 // temperatura corporal em oC

// Concatenando string com número usando interpolação de string (template string).
// O ponto de ebulição da água é 100 oC. A temperatura do corpo humano é de 37 oC. A gravidade da terra é 9.81/s2.
console.log(`O ponto de ebulição da água é ${boilingPoint} oC. \nA Temperatura do corpo humao é ${bodyTemp} oC. \nA gravidade da Terra é ${gravidade} m/s2`)