// Switch é uma alternativa para else if. Começa com uma palavra-chave switch seguida por um parêntese e um bloco de código. 
// Dentro do bloco de código teremos casos diferentes. O bloco de caso é executado se o valor no parêntese da instrução switch corresponder ao valor de caso.
// A instrução break é para encerrar a execução do código não seja interrompida depois que a condição for satisfeita.
// O blco padrão é executado se todos os casos não satisfazerem a condição.

// sintaxe
// switch (caseValue) {
//     case 1:
//         code
//         break
//     case 2:
//         code
//         break
//     case 3:
//         code
//     default:
//         code
// }


let tempo = 'nublado';
switch (tempo) {
    case 'chuvoso':
        console.log('Vocẽ precisa de uma capa de chuva');
        break;

    case 'nublado':
        console.log('Vocẽ precisa de uma jaqueta');
        break;
    
    case 'sol':
        console.log('Saia livremente');
        break;
    
    default:
        console.log('Não precisa de capa de chuva nem jaqueta')
    
}