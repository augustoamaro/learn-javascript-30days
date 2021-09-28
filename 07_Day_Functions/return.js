// A função pode retornar valores, se uma função não retornar valores, o valor da função é indefinido. Retornaremos o valor para uma função em vez de imprimi-las

function printFullName(){
    let firstName = 'Augusto';
    let secondName = 'Amaro';
    let space = ' ';
    let fullName = firstName + space + secondName;
    return fullName;
}

console.log(printFullName());


function addTwoNumbers(){
    let numOne = 2;
    let numTwo = 10;
    let total = numOne + numTwo;
    return total
}

console.log(addTwoNumbers());