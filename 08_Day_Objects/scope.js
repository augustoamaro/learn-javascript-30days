// Uma variável declarada com var apenas com escopo de função, mas a variável declarada com let ou const é o escopo do bloco (function, if, loop etc...). Bloco é um código entre duas chaves ({})

//scope.js
function letsLearnScope() {
    var gravity = 9.81
    console.log(gravity)

}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true) {
    var gravity = 9.81
    console.log(gravity) // 9.81
}
console.log(gravity)  // 9.81

for (var i = 0; i < 3; i++) {
    console.log(i) // 1, 2, 3
}
console.log(i)

// No ES6, há let e const, portando, você não sofrerá com a dissimulação do var. Quando usamos let, nossa variável tem escopo de bloco e não infecta outras partes do código.

//scope.js
function letsLearnScope() {
    // you can use let or const, but gravity is constant I prefer to use const
    const gravity = 9.81
    console.log(gravity) 
    // console.log(gravity), Uncaught ReferenceError: gravity is not defined
}

if (true) {
    const gravity = 9.81
    console.log(gravity) // 9.81
    // console.log(gravity), Uncaught ReferenceError: gravity is not defined
}

for (let i = 0; i < 3; i++) {
    console.log(i) // 1, 2, 3
    // console.log(i), Uncaught ReferenceError: gravity is not defined
}

// O escopo let e const é o mesmo. A diferença é apenas reatribuir. Não podemos alterar ou reatribuir o valor da variável const. É aconselhado fortemente usar let ou const para questões de código limpo e evitará erros de depuração.
// Como regra geral, você pode usar let para quaquer valor que mudar, const para qualquer valor constante (array, object, arrow function e function expression)