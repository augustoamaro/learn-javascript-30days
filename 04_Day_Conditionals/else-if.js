// Usamos else if quando temos várias condições
// Por boas práticas não usar else if, usar clean code.


let a = 0

if (a > 0) {
    console.log(`${a} é um número positivo`);

} else if (a == 0) {
    console.log(`${a} é um número negativo`);

} else {
    console.log(`${a} não é um número`);
}


let weather = 'sunny';

if (weather === 'rainy') {
    console.log('Você precisa de uma capa de chuva');

} else if (weather === 'numblado') {
    console.log('Vocẽ precisa de uma jaqueta');

} else if (weather === 'ensolarado') {
    console.log('object');

} else {
    console.log('Não há necessidade de capa de chuva');
}