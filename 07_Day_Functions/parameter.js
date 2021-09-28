// Em uma função, podemos passar diferentes tipos de dados (number, string, boolean, object, function) como parâmetro

// função com parâmetro
function areaOfCircle(r) {
    let area = Math.PI * r * r;
    return area
}

console.log(areaOfCircle(10)); // deve ser chamado com um argumento


function square(number) {
    return number * number
}

console.log(square(5));


// Função com dois parâmetros
function sumTwoNumbers(numberOne, numberTwo) {
    let sum = numberOne + numberTwo;
    return sum
}

console.log(sumTwoNumbers(5, 5));


// Função com vários parâmetros
function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArrayValues(numbers));


const areaOfCircle2 = (radius) => {
    let area = Math.PI * radius * radius;
    return area;
}

console.log(areaOfCircle2(10));
