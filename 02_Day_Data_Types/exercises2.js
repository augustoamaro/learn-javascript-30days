// 1. Usando console.log(), imprima a seguinte instrução: 'Não há exercício melhor para o coração do que estender a mão e erguer as pessoas.'
console.log('1) Não há exercício melhor para o coração do que estender a mão e erguer as pessoas.')

// 2. Usando console.log(), imprima a seguinte citação de Madre Teresa: "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log('2) Amor não é paternalista e caridade não tem nada a ver com piedade, é amor. Caridade e amor são o mesmo - com a caridade você dá amor, então não dê apenas dinheiro, mas estenda a mão em vez disso.')

// 3. Verifique se typeof '10' é exatamente igual a 10. Caso contrário, torne-o exatamente igual.
console.log('10' == 10)

// 4. Verifique se parseFloat ('9.8') é igual a 10, caso contrário, torne-o exatamente igual a 10.


// 5. Verifique se 'on' é encontrado tanto em python quanto em 'jargon'.

// 6. Espero que este curso não esteja cheio de jargões. Verifique se há jargão na frase.

// 7. Gere um número aleatório entre 0 e 100 inclusive.
console.log('7) ', Math.random() * (0 - 100 + 1) + 100);

// 8. Gere um número aleatório entre 50 e 100 inclusive.
console.log('8) ', Math.random() * (50 - 100 + 1) + 100);

// 9. Gere um número aleatório entre 0 e 255, inclusive.
console.log('9) ', Math.random() * (50 - 255 + 1) + 255);

// 10. Acesse os caracteres da string 'JavaScript' usando um número aleatório.
let js = 'JavaScript';
console.log('10) ', Math.random() * js.length);

// 11. Use console.log() e caracteres de escape para imprimir o seguinte padrão.
// 1  1  1  1  1 
// 2  1  2  4  8 
// 3  1  3  9  27 
// 4  1  4  16  64 
// 5  1  5  25  125
console.log('11) ', '1 1 1 1 1 \n2 1 2 4 8 \n3  1  3  9  27\n4  1  4  16  64\n5  1  5  25  125 ')

// 12. Use substr para cortar a frase porque porque porque da seguinte frase: 'Você não pode terminar uma frase com porque porque porque é uma conjunção'.
let phrase = 'Você não pode terminar uma frase com porque porque porque é uma conjunção';
console.log('12) ', phrase.substring(37, 57));
