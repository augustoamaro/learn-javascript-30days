// 1. Declare uma função fullName e imprima seu nome completo.
function fullName() {
    let firstName = 'Leonidas';
    let lastName = 'Amaro'
    let space = ' ';
    fullName = firstName + space + lastName;
    console.log(fullName);
}

fullName()


// 2. Declare uma função fullName e agora ela leva firstName, lastName como um parâmetro e retorna seu nome completo.
function fullName2(firstName, lastName) {
    let space = ' ';
    return full = firstName + space + lastName;
}

console.log(fullName2('Augusto', 'Amaro'))

// 3. Declare uma função addNumbers e ela leva dois dois parâmetros e retorna sum.
function addNumbers(params, sum) {
    return sum = params + params
}

console.log(addNumbers(5, 5))

// 4. Uma área de um retângulo é calculada da seguinte maneira: área = comprimento x largura . Escreva uma função que calcule areaOfRectangle.
function areaOfRectangle(comprimento, largura) {
    return area = comprimento * largura
}

console.log(areaOfRectangle(5, 5))

// 5. O perímetro de um retângulo é calculado da seguinte maneira: perímetro = 2x (comprimento + largura) . Escreva uma função que calcule perimeterOfRectangle.
function perimeterOfRectangle(comprimento, largura) {
    return perimeter = 2 * (comprimento + largura)
}

console.log(perimeterOfRectangle(4, 2))

// 6. O volume de um prisma retangular é calculado da seguinte maneira: volume = comprimento x largura x altura . Escreva uma função que calcule volumeOfRectPrism.
function volumeOfRectPrism(largura) {
    return comprimento = largura * largura
}

console.log(volumeOfRectPrism(2, 2))

// 7. A área de um círculo é calculada da seguinte maneira: área = π x r x r. Escreva uma função que calcule areaOfCircle
function areaOfRectangle(r) {
    return area = Math.PI * r * r
}

console.log(areaOfRectangle(2))

// 8. A circunferência de um círculo é calculada da seguinte maneira: circunferência = 2πr. Escreva uma função que calcule circumOfCircle
function circumOfCircle(r) {
    return circuferencia = 2 * Math.PI * r;
}

console.log(circumOfCircle(5))
// 9. A densidade de uma substância é calculada da seguinte maneira: densidade = massa / volume . Escreva uma função que calcule a densidade.
function density(massa, volume) {
    return densidade = massa / volume;
}

console.log(density(10, 5))

// 10. A velocidade é calculada dividindo a distância total percorrida por um objeto em movimento pela quantidade total de tempo gasto. Escreva uma função que calcule a velocidade de um objeto em movimento, velocidade.

// 11. O peso de uma substância é calculado da seguinte maneira: peso = massa x gravidade . Escreva uma função que calcule o peso .
function peso(massa, gravidade) {
    return peso = massa * gravidade
}

console.log(peso(5, 5))

// 12. A temperatura em oC pode ser convertida em oF usando esta fórmula: oF = (oC x 9/5) + 32 . Escreva uma função que converte oC em oF convertCelciusToFahrenheit.
function convertCelciusToFahrenheit(oC) {
    return of = (oC * 9 / 6) + 32
}

console.log(convertCelciusToFahrenheit(20))

// 13. O índice de massa corporal (IMC) é calculado da seguinte forma: bmi = peso em Kg / (altura x altura) em m2 . 
//Escreva uma função que calcule bmi . O IMC é usado para definir amplamente diferentes grupos de peso em adultos de 20 anos ou mais. 
//Verifique se uma pessoa está abaixo do peso, normal, com sobrepeso ou obeso com base nas informações fornecidas abaixo.
function imc(peso, altura) {
    return bmi = peso / (altura * altura)
}

console.log(imc(175, 78))


// Os mesmos grupos se aplicam a homens e mulheres.
// Baixo peso : o IMC é inferior a 18,5
// Peso normal : o IMC é de 18,5 a 24,9
// Sobrepeso : o IMC é de 25 a 29,9
// Obeso : o IMC é 30 ou mais


// 14. Escreva uma função chamada checkSeason , ela pega um parâmetro de mês e retorna a estação: outono, inverno, primavera ou verão.
function checkSeason(mes) {
    if (mes === 'Janeiro' || mes === 'Fevereiro' || mes === 'Março') {
        return console.log('Verão')
    }

    if (mes === 'Abril' || mes === 'Maio' || mes === 'Junho') {
        return console.log('Outono')
    }

    if (mes === 'Julho' || mes === 'Agosto' || mes === 'Setembro') {
        return console.log('Inverno')
    }

    if (mes === 'Outubro' || mes === 'Novembro' || mes === 'Dezembro') {
        return console.log('Primavera')
    }

}

checkSeason('Fevereiro')

// 15. Math.max retorna seu maior argumento. Escreva uma função findMax que receba três argumentos e retorne seu máximo sem usar o método Math.max.

// console . log ( findMax ( 0 ,  10 ,  5 ) ) 
// 10 
// console . log ( findMax ( 0 ,  - 10 ,  - 2 ) ) 
// 0

function findMax(num1, num2, num3){
    
    let maxNumber = Math.max(num1, num2, num3);
    console.log(maxNumber)
}

findMax(546, 334, 58)