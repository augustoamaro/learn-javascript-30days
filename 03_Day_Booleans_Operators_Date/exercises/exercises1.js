// 1. Declare firstName, lastName, country, city, age, isMarried, variável year e atribua valor a ela e use o operador typeof para verificar diferentes tipos de dados.
let firstName = 'Augusto';
let age = 29;
let isMarried = true;
let year = 2021;

console.log('1) ',typeof firstName, typeof age, typeof isMarried, typeof year);

// 2. Verifique se o tipo de '10' é igual a 10.
console.log('2) ',typeof '10' === 10 );

// 3. Verifique se parseInt ('9.8') é igual a 10.
console.log('3) ',typeof parseInt('9.8') === 10)

// 4. O valor booleano é verdadeiro ou falso.
// 4.1. Escreva três instruções JavaScript que forneçam um valor verdadeiro.
4 > 3
4 === 4
3 < 10

// 4.2. Escreva três instruções JavaScript que forneçam um valor falso.
3 > 4
'10' === 10
4 !== 4

// 5. Descubra o resultado da seguinte expressão de comparação primeiro, sem usar console.log(). Depois de decidir o resultado, confirme-o usando console.log()
4 > 3 // true
4 >= 3 // true
4 < 3 // false
4 <= 3 // false
4 == 4 // true
4 === 4 // true
4 != 4 // false
4 !== 4 // false
4 != '4' // false
4 == '4' // true
4 === '4' // false
//Encontre o length do python e do jargon e faça uma declaração de comparação falsa.
let py = 'python';
let jargon = 'jargon';
console.log('5) ',py.length !== jargon.length);


// 6. Descubra o resultado das seguintes expressões primeiro sem usar console.log(). Depois de decidir o resultado, confirme-o usando console.log()
4 > 3 && 10 < 12
4 > 3 && 10 > 12
4 > 3 || 10 < 12
4 > 3 || 10 > 12
! (4> 3)
! (4 < 3)
!(false)
! (4> 3 && 10 < 12)
! (4 > 3 && 10 > 12)
! (4 === '4')
// Não há 'on' tanto no dragão quanto no python

// 7. Use o objeto Date para fazer as seguintes atividades.
let date = new Date() // Pega o date e armazena em uma variável
// Qual é o ano hoje?
console.log('Year ', date.getFullYear())
// Qual é o mês de hoje como um número?
console.log('Month ', date.getMonth() + 1)
// Qual é a data hoje?
console.log('Day ', date.getDay());
// Qual é o dia de hoje como um número?
console.log('Day ', date.getDate());
// Quais são as horas agora?
console.log('Hour ', date.getHours());
// Quais são os minutos agora?
console.log('Minute ', date.getMinutes());
// Descubra o número de segundos decorridos de 1º de janeiro de 1970 até agora.
console.log('1970', Date.now())