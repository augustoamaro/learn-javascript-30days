// 1. Obtenha a entrada do usuário usando o prompt (“Digite sua idade:”). Se o usuário tiver 18 anos ou mais, dê feedback: 
//'Você tem idade suficiente para dirigir', mas se não tiver 18, dê outro feedback afirmando que é necessário esperar o número de anos que ele precisa para completar 18 anos.
// Digite sua idade: 30
// Você tem idade suficiente para dirigir.
// Digite sua idade: 15
// Você fica com 3 anos para dirigir.
let age = Number(prompt('Digite sua idade'))
if (age >= 18) {
    alert('Você tem idade suficiente para dirigir');
} else {
    alert(`Faltam ${18 - age} anos para dirigir`);
}



// 2. Compare os valores de myAge e yourAge usando if… else. Com base na comparação, registre o resultado no console informando quem é mais velho (eu ou você). Use o prompt (“Digite sua idade:”) para obter a idade como entrada.
// Digite sua idade: 30
// Você é 5 anos mais velho que eu.

let age = Number(prompt('Digite sua idade'));
let yourAge = Number(prompt('Digite sua idade'));
alert(`Você é ${age - yourAge} mais velho que eu`)

// 3. Se a for maior que b, retorne 'a é maior que b' senão 'a é menor que b'. Tente implementá-lo de várias maneiras
// usando se mais
// operador ternário.
//   let  a  =  4 
//   let  b  =  3
//   4 é maior que 3
let a = 4;
let b = 3;

if (a > b) {
    console.log('a é maior que b');
} else {
    console.log('a é menor que b');
}

// 4. Os números pares são divisíveis por 2 e o resto é zero. Como você verifica se um número está par ou não usando JavaScript?
// Digite um número: 2
// 2 é um número par
// Digite um número: 9
// 9 é um número ímpar.

