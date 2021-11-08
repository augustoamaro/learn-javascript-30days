// JavaScript permite escrever funções dentro de uma função externa. Podemos escrever quantas funções internas quisermos. Se a função interna acessa 
// as variáveis da função externa, ela é chamada de fechamento.

function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++
        return count
    }
    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());

// Mais exemplos de funções internas

function outerFunction2() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }

    return {
        plusOne: plusOne(),
        minusOne: minusOne()
    }
}
const innerFuncs = outerFunction2();

console.log(innerFuncs.plusOne);
console.log(innerFuncs.minusOne);