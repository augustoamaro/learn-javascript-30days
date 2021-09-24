// 1. Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
let grade = 99

if (grade >= 80 && grade <= 100) {
    console.log('A');
} else if (grade >= 70 && grade <= 79) {
    console.log('B');
} else if (grade >= 60 && grade <= 69) {
    console.log('C');
} else if (grade >= 50 && grade <= 59) {
    console.log('D');
} else if (grade >= 0 && grade <= 49) {
    console.log('F');
}

// 2. Verifique se a estação é outono, inverno, primavera ou verão. Se a entrada do usuário for:
// Setembro, outubro ou novembro, a temporada é outono.
// Dezembro, janeiro ou fevereiro, a temporada é inverno.
// Março, abril ou maio, a temporada é primavera
// Junho, julho ou agosto, a temporada é verão
let season = prompt('Digite o mês')
if (season === 'Setember' | season === 'October' || season === 'November') {
    alert('Autumn')
} else if (season === 'December' | season === 'January' || season === 'February') {
    alert('Winter')
} else if (season === 'March' | season === 'April' || season === 'May') {
    alert('Spring')
} else if (season === 'June' | season === 'July' || season === 'August') {
    alert('Summer')
}

// 3. Verifique se um dia é dia de fim de semana ou dia útil. Seu script terá um dia como entrada.
//     Que dia é hoje? sábado
//     Sábado é fim de semana.
//     Que dia é hoje? sábado
//     Sábado é fim de semana.
//     Que dia é hoje? sexta-feira
//     Sexta-feira é dia de trabalho.
//     Que dia é hoje? Sexta-feira
//     Sexta-feira é dia de trabalho.

