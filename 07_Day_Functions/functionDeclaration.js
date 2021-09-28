// Declarar uma função sem um parâmetro

function functionName() {
    // o código vai aqui
}

functionName() // chamada de função com o nome e parênteses


// função sem parâmetro, uma função que faz um número ao quadrado
function square() {
    let num = 2;
    let square = num * num;
    console.log(square);
}

square(); // Uma função deve ser chamada para ser executada



function printFullName() {
    let firstName = 'Augusto';
    let secondName = 'Amaro';
    let space = ' ';
    let fullName = firstName + space + secondName;
    console.log(fullName);
}

printFullName();